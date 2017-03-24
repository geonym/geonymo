// -----------------------------------------------
// File        : ./src/components/geonym/geonym.js
// Desciption  : Geonym component.
// Date        : 2017.03.19 > Fly
// -----------------------------------------------

import BaseWebBase from '../../basewebbase.js'
import Template from '../../templates/geonym/geonym.js'

var L = require('leaflet')
// var async = require('async')

class Geonym extends BaseWebBase {
  constructor (body) {
    super()
    this.body = body
  }

  render () {
    this.body.innerHTML = Template.render()
    this.addEventListener()
  }
  addEventListener () {
    this.formSwitcher()
    // this.formGeocodingSubmit()
  }
  formSwitcher () {
    // form buttons
    const buttonGeocoding = document.getElementById('button-geocoding')
    const buttonCoordToGeonym = document.getElementById('button-coord-to-geonym')
    const buttonGeonymToCoord = document.getElementById('button-geonym-to-coord')

    // form inputs
    const inputAddress = document.getElementById('data-address')
    const inputLatitude = document.getElementById('data-latitude')
    const inputLongitude = document.getElementById('data-longitude')
    const inputCode = document.getElementById('data-code')
    const inputChecksum = document.getElementById('data-checksum')

    // Geonym
    var geonym = {
      originLatitude: 51.45,
      originLongitude: -5.45,
      originWide: 15.25,
      originHigh: 10.54,
      alphabetCode: '6789B5NPQC4MXRD3LWTF2KJHG',
      numberOfDigitsForCode: 8,
      alphabetChecksum: '0123456789ACDEFGHJKLMNPQRTUVWXY'
    }
    geonym['alphabetCodeLength'] = geonym.alphabetCode.length
    geonym['alphabetChecksumLength'] = geonym.alphabetChecksum.length

    // Leaflet
    // Create a map centered in Paris...
    let lat = 48.841025
    let lon = 2.377966
    var map = L.map('map').setView([ lat, lon ], 15)
    // ... add an OpenStreetMap tile layer.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    // ... and a beautiful blue marker in Paris with adress.
    L.marker([lat, lon]).addTo(map)
      .bindPopup('139 Rue de Bercy 75012 Paris')
      .openPopup()

    var geonymReturned = this.getFromPositionToGeonym(lon, lat, geonym)
    // Let's give coordinates & Geonym for this new point.
    document.getElementById('userInfo').innerHTML = `
      <div class="alert alert-info" role="alert">
      <strong>Coordinates:</strong> [ ` +
        lat.toFixed(6) + ` ; ` + lon.toFixed(6) + `]
      /
      <strong>Geonym:</strong> ` + geonymReturned + `
      </div>
    `

    // Adress Geocoding.
    buttonGeocoding.addEventListener('click', (e) => {
      e.preventDefault()
      this.formGeocodingSubmit(map, geonym)
    })

    // From Coordinates to Geonym.
    buttonCoordToGeonym.addEventListener('click', (e) => {
      e.preventDefault()
      this.formCoordToGeonymSubmit(map, geonym)
    })

    // From Geonym to Coordinates.
    buttonGeonymToCoord.addEventListener('click', (e) => {
      e.preventDefault()
      this.formGeonymToCoordSubmit(map, geonym)
    })

    // At start...
    if (inputAddress.value === '' &&
        inputLatitude.value === '' &&
        inputLongitude.value === '' &&
        inputCode.value === '' &&
        inputChecksum.value === '') { this.formGeocodingSubmit(map, geonym) }
  }

  formGeocodingSubmit (map, geonym) {
    // Call api to geocode adress.
    const address = this.body.querySelector('[data-address]')
    if (address.value) {
      // If an address is defined, let's geocode it!
      const urlGeocoding = {
        method: 'GET',
        url: `${this.URLGeocoding}/search/?q=`.concat(address.value)
      }

      // Let's interpret results...
      this.request(urlGeocoding, (err, res, data) => {
        if (err) {
          res.status(412).json({msg: err.message})
        } else {
          var address = JSON.parse(data)

          if (address.features.length > 0) {
            // There is at least a result.
            var lon = address.features[0].geometry.coordinates[0]
            var lat = address.features[0].geometry.coordinates[1]
            var label = address.features[0].properties.label

            // Let's calculate Geonym from coordinates.
            var geonymReturned = this.getFromPositionToGeonym(lon, lat, geonym)

            // Let's draw new address Coordinates on the map.
            document.getElementById('userInfo').innerHTML = `
            <div class="alert alert-info" role="alert">
              <strong>Coordonnées:</strong> [` +
                lat.toFixed(6) + ` ; ` + lon.toFixed(6) + `]
              /
              <strong>Geonym:</strong> ` + geonymReturned + `
            </div>
            `
            // Leaflet > Let's go to our new coordinates...
            map.setView([lat, lon], 15)
            // Leaflet > ... and create a marker for these coordinates.
            L.marker([lat, lon]).addTo(map)
              .bindPopup(label)
              .openPopup()
          } else {
            // Address is unknown.
            document.getElementById('userInfo').innerHTML = `
              <div class="alert alert-warning" role="alert">
                <strong>Adresse</strong> > L'adresse que vous recherchez est inconnue.
              </div>
              `

            // Leaflet > Let's go to the ocean
            map.setView([76.71667, -67.49972], 15)
            // Leaflet > ... and create a marker for these coordinates.
            L.marker([76.71667, -67.49972]).addTo(map)
              .bindPopup("L'adresse que vous recherchez est inconnue.")
              .openPopup()
          } // address.features.length
        } // err
      }) // this.request()
    } // address.value
  } // formSubmit()
  formCoordToGeonymSubmit (map, geonym) {
    // Call api to geocode coordinates.
    const lat = this.body.querySelector('[data-latitude]')
    const lon = this.body.querySelector('[data-longitude]')

    // Allow ',' in coordinates, but change it to '.'
    lat.value = lat.value.replace(',', '.')
    lon.value = lon.value.replace(',', '.')

    if (lat.value && lon.value) {
      // If a position is defined, let's geocode it!

      // If lat is out of grid, return an error message.
      if (lat.value < geonym.originLatitude - geonym.originHigh || lat.value > geonym.originLatitude) {
        document.getElementById('userInfo').innerHTML = `
          <div class="alert alert-info" role="alert">
          <strong>Coordonnées:</strong> Les coordonnées saisies sont en dehors de la grille France métropolitaine.
          </div>
          `
        return null
      }
      // If lon is out of grid, return an error message.
      if (lon.value < geonym.originLongitude || lon.value > geonym.originLongitude + geonym.originWide) {
        document.getElementById('userInfo').innerHTML = `
          <div class="alert alert-info" role="alert">
          <strong>Coordonnées:</strong> Les coordonnées saisies sont en dehors de la grille France métropolitaine.
          </div>
          `
        return null
      }

      // Let's calculate Geonym from coordinates.
      var geonymReturned = this.getFromPositionToGeonym(lon.value, lat.value, geonym)

      document.getElementById('userInfo').innerHTML = `
        <div class="alert alert-info" role="alert">
        <strong>Coordonnées:</strong> [` +
          parseFloat(lat.value).toFixed(6) + ` ; ` + parseFloat(lon.value).toFixed(6) + `]
        /
        <strong>Geonym:</strong> ` + geonymReturned + `
        </div>
        `
      // Leaflet > Let's go to our new coordinates...
      map.setView([lat.value, lon.value], 15)
      // Leaflet > ... and create a marker for these coordinates.
      L.marker([lat.value, lon.value]).addTo(map)
        .bindPopup('[ ' + lat.value + ' ; ' + lon.value + ' ]')
        .openPopup()
    } // address.value
  } // formSubmit()
  formGeonymToCoordSubmit (map, geonym) {
    // Call api to geocode coordinates.
    const geonymCode = this.body.querySelector('[data-code]')
    const geonymChecksum = this.body.querySelector('[data-checksum]')

    if (geonymCode.value && geonymChecksum.value) {
      // If a Geonym is defined, let's draw it!

      // Let's calculate Geonym from coordinates.
      var positionResult = this.getFromGeonymToPosition(geonymCode.value, geonymChecksum.value, geonym)
      if (positionResult.error) {
        // Error
        document.getElementById('userInfo').innerHTML = `
          <div class="alert alert-info" role="alert">
          <strong>` + positionResult.error + `</strong>
          </div>
          `
      } else {
        // No error
        document.getElementById('userInfo').innerHTML = `
          <div class="alert alert-info" role="alert">
          <strong>Coordonnées:</strong> [` +
            parseFloat(positionResult.latitude).toFixed(6) + ` ; ` + parseFloat(positionResult.longitude).toFixed(6) + `]
          /
          <strong>Geonym:</strong> ` + positionResult.geonym + `
          </div>
          `
        // Leaflet > Let's go to our new coordinates...
        map.setView([positionResult.latitude, positionResult.longitude], 15)
        // Leaflet > ... and create a marker for these coordinates.
        L.marker([positionResult.latitude, positionResult.longitude]).addTo(map)
          .bindPopup('[ ' + positionResult.latitude + ' ; ' + positionResult.longitude + ' ]')
          .openPopup()
      } // else
    } // address.value
  } // formSubmit()

  getFromPositionToGeonym (paramLongitude, paramLatitude, geonym) {
    // Latitude calculation
    var calcLatitude01 = geonym.originLatitude - paramLatitude
    var calcLatitude02 = calcLatitude01 / geonym.originHigh
    var calcLatitude03 = Math.floor(calcLatitude02 * Math.pow(Math.sqrt(geonym.alphabetCodeLength), geonym.numberOfDigitsForCode))
    var calcLatitude04 = this.toRadix(calcLatitude03, Math.sqrt(geonym.alphabetCodeLength))

    // Longitude calculation
    var calcLongitude01 = paramLongitude - geonym.originLongitude
    var calcLongitude02 = calcLongitude01 / geonym.originWide
    var calcLongitude03 = Math.floor(calcLongitude02 * Math.pow(Math.sqrt(geonym.alphabetCodeLength), geonym.numberOfDigitsForCode))
    var calcLongitude04 = this.toRadix(calcLongitude03, Math.sqrt(geonym.alphabetCodeLength))

    // Let's process to Geonym calculation
    var latitudeString = this.padLeft(calcLatitude04, 8)
    var longitudeString = this.padLeft(calcLongitude04, 8)
    var letter = ''
    var letterPosition = 0
    var geonymResult = ''

    for (letterPosition = 0; letterPosition < 8; letterPosition++) {
      letter = parseInt(latitudeString.substring(letterPosition, letterPosition + 1)) * Math.sqrt(geonym.alphabetCodeLength) +
                parseInt(longitudeString.substring(letterPosition, letterPosition + 1)) + 1
      letter = geonym.alphabetCode.substring(letter - 1, letter)
      geonymResult = geonymResult + letter
    }
    // Let's process to Geonym checksum calculation
    var checkSum = 0
    var checkSumPosition = 0
    var checkSumLetter = ''
    for (letterPosition = 0; letterPosition < 8; letterPosition++) {
      checkSum = geonym.alphabetCode.search(geonymResult.substring(letterPosition, letterPosition + 1)) * (letterPosition + 1)
      checkSumPosition = checkSumPosition + checkSum
    }
    checkSumPosition = checkSumPosition % geonym.alphabetChecksumLength
    checkSumLetter = geonym.alphabetChecksum.substring(checkSumPosition, checkSumPosition + 1)

    // Geonym to return is...
    geonymResult = geonymResult.substring(0, 4) + '-' + geonymResult.substring(4, 8) + '/' + checkSumLetter

    return geonymResult
  }
  getFromGeonymToPosition (paramCode, paramChecksum, geonym) {
    // Extract Code & CheckSum from Geonym parameter.
    var code = paramCode.substring(0, 4) + paramCode.substring(5, 9)
    var latitudeInt = 0
    var latitudeBase5 = ''
    var latitudeBase10 = 0
    var longitudeMod = 0.0
    var longitudeBase5 = ''
    var longitudeBase10 = 0

    // Find position from alphabetCode for each code character.
    var letterPosition = 0
    var position = 0
    for (letterPosition = 0; letterPosition < 8; letterPosition++) {
      position = geonym.alphabetCode.search(code.substring(letterPosition, letterPosition + 1))
      longitudeMod = position % (Math.sqrt(geonym.alphabetCodeLength))
      longitudeBase5 = longitudeBase5 + longitudeMod.toString()
      latitudeInt = Math.floor(position / Math.sqrt(geonym.alphabetCodeLength))
      latitudeBase5 = latitudeBase5 + latitudeInt.toString()
    }

    var loop
    // latitude
    var latitudeRecord
    for (loop = 0; loop < 8; loop++) {
      latitudeRecord = latitudeBase5.substring((8 - loop - 1), (8 - loop))
      latitudeRecord = latitudeRecord * Math.pow(Math.sqrt(geonym.alphabetCodeLength), loop)
      latitudeRecord = Math.floor(latitudeRecord)
      latitudeBase10 = latitudeBase10 + latitudeRecord
    }
    latitudeBase10 = latitudeBase10 + 0.5
    latitudeBase10 = latitudeBase10 / (Math.pow(Math.sqrt(geonym.alphabetCodeLength), geonym.numberOfDigitsForCode))
    latitudeBase10 = latitudeBase10 * geonym.originHigh
    latitudeBase10 = geonym.originLatitude - latitudeBase10

    // longitude
    var longitudeRecord
    for (loop = 8; loop > 0; loop--) {
      longitudeRecord = longitudeBase5.substring((loop), (loop - 1))
      longitudeRecord = longitudeRecord * Math.pow(Math.sqrt(geonym.alphabetCodeLength), 8 - loop)
      longitudeRecord = Math.floor(longitudeRecord)
      longitudeBase10 = longitudeBase10 + longitudeRecord
    }
    longitudeBase10 = longitudeBase10 + 0.5
    longitudeBase10 = longitudeBase10 / (Math.pow(Math.sqrt(geonym.alphabetCodeLength), geonym.numberOfDigitsForCode))
    longitudeBase10 = longitudeBase10 * geonym.originWide
    longitudeBase10 = geonym.originLongitude + longitudeBase10

    // Let's process to Geonym checksum calculation
    var checkSum = 0
    var checkSumResult = 0
    for (letterPosition = 0; letterPosition < 8; letterPosition++) {
      checkSum = geonym.alphabetCode.search(code.substring(letterPosition, letterPosition + 1)) * (letterPosition + 1)
      checkSumResult = checkSumResult + checkSum
    }
    checkSumResult = checkSumResult % geonym.alphabetChecksumLength
    checkSumResult = geonym.alphabetChecksum.substring(checkSumResult, checkSumResult + 1)

    // Check checkSumResult vs checkSum
    var positionResult = {}
    if (checkSumResult === paramChecksum) {
      positionResult = {
        geonym: code.substring(0, 4) + '-' + code.substring(4, 9) + '/' + paramChecksum,
        latitude: latitudeBase10,
        longitude: longitudeBase10
      }
      return positionResult
    } else {
      positionResult = {
        geonym: code.substring(0, 4) + '-' + code.substring(4, 9) + '/' + paramChecksum,
        error: "Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance."
      }
      return positionResult
    }
  }
  toRadix (N, radix) {
    var HexN = ''
    var Q = Math.floor(Math.abs(N))
    var R
    while (true) {
      R = Q % radix
      HexN = '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(R) + HexN
      Q = (Q - R) / radix
      if (Q === 0) break
    }
    return ((N < 0) ? '-' + HexN : HexN)
  }
  padLeft (value, length) {
    // Pad a value with '0' on the left.
    return (value.toString().length < length) ? this.padLeft('0' + value, length) : value
  }

} // Class Geonym

module.exports = Geonym
