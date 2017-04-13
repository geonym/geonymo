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
    this.formGeocodingSubmit()
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
      alphabetCode: '456783NPR92MXTC1LWVD0KJHF',
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

    // Let's calculate Geonym from coordinates.
    const URLGeonym = {
      method: 'GET',
      url: `${this.URLGeonym}/?` +
        `lat=` + lat +
        `&lon=` + lon
    }
    this.request(URLGeonym, (err, res, data) => {
      if (err) {
        // Error
        this.userInfoError(err)
        this.leafletDrawPoint(76.71667, -67.49972, 15, map,
          "Il n'existe pas de coordonnées.")
      } else {
        var positionResult = JSON.parse(data)

        // Some coordinates received ?
        if (!positionResult.properties) {
          // No coordinates received.
          var userInfoText =
            'Les coordonnées renseignées sont en dehors de la grille définie. ' +
            '( Plage de longitude autorisée : ]' +
            positionResult.params.min_lon + ' ; ' + positionResult.params.max_lon + '[ ' +
            ' / Plage de latitude autorisée : ]' +
            positionResult.params.min_lat + ' ; ' + positionResult.params.max_lat + '[ ). '
          this.userInfoError(userInfoText)
          this.leafletDrawPoint(76.71667, -67.49972, 15, map, userInfoText)
        } else {
          // Coordinates received. Let's draw new coordinates on the map.
          this.userInfoMessage({
            'Title_01': 'Coordonnées',
            'Text_01': parseFloat(lat).toFixed(6) + ` ; ` + parseFloat(lon).toFixed(6),
            'Title_02': 'Geonym',
            'Text_02':
              positionResult.properties.geonym.substring(0, 4) + `-` +
              positionResult.properties.geonym.substring(4, 8) + `/` +
              positionResult.properties.checksum
          })
          this.leafletDrawPoint(lat, lon, 15, map,
            '[ ' + parseFloat(lat).toFixed(6) + ' ; ' + parseFloat(lon).toFixed(6) + ' ]')
        } // else (coordinates received or not received.)
      } // else (error / No Error)
    }) // this.request

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
      this.formGeonymToCoordSubmit(map)
    })

    // At start...
    if (inputAddress.value === '' &&
        inputLatitude.value === '' &&
        inputLongitude.value === '' &&
        inputCode.value === '' &&
        inputChecksum.value === '') {
      this.formGeocodingSubmit(map, geonym)
    }
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
          // Data are collected.
          var address = JSON.parse(data)

          if (address.features.length > 0) {
            // There is at least a result.
            var lon = address.features[0].geometry.coordinates[0]
            var lat = address.features[0].geometry.coordinates[1]
            var label = address.features[0].properties.label

            // Let's calculate Geonym from coordinates.
            const URLGeonym = {
              method: 'GET',
              url: `${this.URLGeonym}/?` +
                `lat=` + lat +
                `&lon=` + lon
            }
            this.request(URLGeonym, (err, res, data) => {
              if (err) {
                // Error
                this.userInfoError(err)
                this.leafletDrawPoint(76.71667, -67.49972, 15, map,
                  "Il n'existe pas de coordonnées.")
              } else {
                var positionResult = JSON.parse(data)

                // Some coordinates received ?
                if (!positionResult.properties) {
                  // No coordinates received.
                  var userInfoText =
                    'Les coordonnées renseignées sont en dehors de la grille définie. ' +
                    '( Plage de longitude autorisée : ]' +
                    positionResult.params.min_lon + ' ; ' + positionResult.params.max_lon + '[ ' +
                    ' / Plage de latitude autorisée : ]' +
                    positionResult.params.min_lat + ' ; ' + positionResult.params.max_lat + '[ ). '
                  this.userInfoError(userInfoText)
                  this.leafletDrawPoint(76.71667, -67.49972, 15, map, userInfoText)
                } else {
                  // Coordinates received. Let's draw new coordinates on the map.
                  this.userInfoMessage({
                    'Title_01': 'Coordonnées',
                    'Text_01': parseFloat(lat).toFixed(6) + ` ; ` + parseFloat(lon).toFixed(6),
                    'Title_02': 'Geonym',
                    'Text_02':
                      positionResult.properties.geonym.substring(0, 4) + `-` +
                      positionResult.properties.geonym.substring(4, 8) + `/` +
                      positionResult.properties.checksum
                  })
                  this.leafletDrawPoint(lat, lon, 15, map, label)
                } // else (coordinates received or not received.)
              } // else (error / No Error)
            }) // this.request
          } else {
            // Address is unknown.
            this.userInfoError("L'adresse que vous recherchez est inconnue.")
            this.leafletDrawPoint(76.71667, -67.49972, 15, map,
              "L'adresse que vous recherchez est inconnue.")
          } // Adress is unknown.
        } // Data are collected.
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

    // Check if lon.value && lat.value can be considered to floats.
    var regex = /^[-+]?[0-9]*\.?[0-9]+$/i
    var latRegex = regex.test(lat.value)
    var lonRegex = regex.test(lon.value)
    if (!latRegex || !lonRegex) {
      this.userInfoError('Les coordonnées saisies ne sont pas correctes.')
      this.leafletDrawPoint(76.71667, -67.49972, 15, map,
        'Les coordonnées saisies ne sont pas correctes.')
      return null
    }

    if (lat.value && lon.value) {
      // If a position is defined, let's geocode it!

      // Let's calculate Geonym from coordinates.
      const URLGeonym = {
        method: 'GET',
        url: `${this.URLGeonym}/?` +
          `lat=` + lat.value +
          `&lon=` + lon.value
      }
      this.request(URLGeonym, (err, res, data) => {
        if (err) {
          // Error
          this.userInfoError(err)
          this.leafletDrawPoint(76.71667, -67.49972, 15, map,
            "Il n'existe pas de coordonnées.")
        } else {
          var positionResult = JSON.parse(data)

          // Some coordinates received ?
          if (!positionResult.properties) {
            // No coordinates received.
            var userInfoText =
              'Les coordonnées renseignées sont en dehors de la grille définie. ' +
              '( Plage de longitude autorisée : ]' +
              positionResult.params.min_lon + ' ; ' + positionResult.params.max_lon + '[ ' +
              ' / Plage de latitude autorisée : ]' +
              positionResult.params.min_lat + ' ; ' + positionResult.params.max_lat + '[ ). '
            this.userInfoError(userInfoText)
            this.leafletDrawPoint(76.71667, -67.49972, 15, map, userInfoText)
          } else {
            // Coordinates received. Let's draw new coordinates on the map.
            this.userInfoMessage({
              'Title_01': 'Coordonnées',
              'Text_01': parseFloat(lat.value).toFixed(6) + ` ; ` + parseFloat(lon.value).toFixed(6),
              'Title_02': 'Geonym',
              'Text_02':
                positionResult.properties.geonym.substring(0, 4) + `-` +
                positionResult.properties.geonym.substring(4, 8) + `/` +
                positionResult.properties.checksum
            })
            this.leafletDrawPoint(lat.value, lon.value, 15, map,
              '[ ' + parseFloat(lat.value).toFixed(6) + ' ; ' + parseFloat(lon.value).toFixed(6) + ' ]')
          } // else (coordinates received or not received.)
        } // else (error / No Error)
      }) // this.request
    } // if lat.value & lon.value = OK.
  } // formCoordToGeonymSubmit()
  formGeonymToCoordSubmit (map) {
    // Call api to geocode coordinates.
    var geonymCode = this.body.querySelector('[data-code]')
    var geonymChecksum = this.body.querySelector('[data-checksum]')

    geonymCode.value = geonymCode.value.toUpperCase()
    geonymChecksum.value = geonymChecksum.value.toUpperCase()

    if (geonymCode.value && geonymChecksum.value) {
      // If a Geonym is defined, let's draw it!

      // Let's calculate Geonym from coordinates.
      const URLGeonym = {
        method: 'GET',
        url: `${this.URLGeonym}/?geonym=`.concat(geonymCode.value)
      }
      this.request(URLGeonym, (err, res, data) => {
        if (err) {
          this.userInfoError(err)
          this.leafletDrawPoint(76.71667, -67.49972, 15, map,
            "Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
        } else {
          var positionResult = JSON.parse(data)

          if ((positionResult.properties.geonym === (geonymCode.value.substring(0, 4) + geonymCode.value.substring(5, 9))) &&
            (positionResult.properties.checksum === geonymChecksum.value)) {
            // Geonym is OK. Let's draw new address Coordinates on the map.
            this.userInfoMessage({
              'Title_01': 'Coordonnées',
              'Text_01': parseFloat(positionResult.properties.lat).toFixed(6) + ` ; ` + parseFloat(positionResult.properties.lon).toFixed(6),
              'Title_02': 'Geonym',
              'Text_02': geonymCode.value + `/` + geonymChecksum.value
            })
            this.leafletDrawPoint(positionResult.properties.lat, positionResult.properties.lon, 15, map,
              '[ ' + parseFloat(positionResult.properties.lat).toFixed(6) + ' ; ' + parseFloat(positionResult.properties.lon).toFixed(6) + ' ]')
          } else {
            // Incorrect Geonym. Try again.
            this.userInfoError("Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
            this.leafletDrawPoint(76.71667, -67.49972, 15, map,
              "Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
          } // else
        } // else
      }) // request urlGeonym
    } // geonym.code && geonym.value defined.
  } // formSubmit()

  leafletDrawPoint (paramLatitude, paramLongitude, paramZoom, paramMap, paramMessage) {
    // Leaflet > Go to map coordinates.
    paramMap.setView([paramLatitude, paramLongitude], paramZoom)
    // Leaflet > ... and create a marker for these coordinates.
    L.marker([paramLatitude, paramLongitude]).addTo(paramMap)
      .bindPopup(paramMessage)
      .openPopup()
  }
  userInfoError (paramMessage) {
    // Put an error message into userInfo div.
    document.getElementById('userInfo').innerHTML = `
      <div class="alert alert-info" role="alert">
      <strong>` + paramMessage + `</strong>
      </div>
    `
  }
  userInfoMessage (paramUserInfoText) {
    // Put a message into userInfo div.
    document.getElementById('userInfo').innerHTML = `
    <div class="alert alert-info" role="alert">
      <strong>` + paramUserInfoText.Title_01 + `:</strong> [ ` +
        paramUserInfoText.Text_01 + ` ]
      /
      <strong>` + paramUserInfoText.Title_02 + `:</strong> ` +
      paramUserInfoText.Text_02 + `
    </div>
    `
  }
} // Class Geonym

module.exports = Geonym
