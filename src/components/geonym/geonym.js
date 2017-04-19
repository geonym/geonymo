// -----------------------------------------------
// File        : ./src/components/geonym/geonym.js
// Desciption  : Geonym component.
// Date        : 2017.03.19 > Fly
// -----------------------------------------------

import BaseWebBase from '../../basewebbase.js'
import Template from '../../templates/geonym/geonym.js'

var L = require('leaflet')

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
        this.leafletDrawMarker(76.71667, -67.49972, 15, map,
          "Il n'existe pas de coordonnées.")
      } else {
        var positionResult = JSON.parse(data)

        // Some coordinates received ?
        if (!positionResult.properties) {
          // No coordinates received.
          var userInfoText =
            'Les coordonnées renseignées sont en dehors de la grille définie. ' +
            '( Plage de latitude autorisée : ]' +
            positionResult.params.min_lat + ' ; ' + positionResult.params.max_lat + '[ ' +
            ' / Plage de longitude autorisée : ]' +
            positionResult.params.min_lon + ' ; ' + positionResult.params.max_lon + '[ ). '
          this.userInfoError(userInfoText)
          this.leafletDrawMarker(76.71667, -67.49972, 15, map, userInfoText)
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
          this.leafletDrawMarker(lat, lon, 15, map,
            '[ ' + parseFloat(lat).toFixed(6) + ' ; ' + parseFloat(lon).toFixed(6) + ' ]')
        } // else (coordinates received or not received.)
      } // else (error / No Error)
    }) // this.request

    // Adress Geocoding.
    buttonGeocoding.addEventListener('click', (e) => {
      e.preventDefault()
      this.formGeocodingSubmit(map)
    })

    // From Coordinates to Geonym.
    buttonCoordToGeonym.addEventListener('click', (e) => {
      e.preventDefault()
      this.formCoordToGeonymSubmit(map)
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
      this.formGeocodingSubmit(map)
    }
  }

  formGeocodingSubmit (map) {
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
          this.userInfoError(err)
          this.leafletDrawMarker(76.71667, -67.49972, 15, map,
            "Il n'existe pas de coordonnées.")
        } else {
          // Data are collected.
          var address = JSON.parse(data)

          if (address.features.length > 0) {
            // There is at least a result.
            var lon = address.features[0].geometry.coordinates[0]
            var lat = address.features[0].geometry.coordinates[1]
            var label = address.features[0].properties.label

            // If a position is defined, let's geocode it thanks to geonym API.
            this.geonymAPILatLon(lat, lon, map, label)
          } else {
            // Address is unknown.
            this.userInfoError("L'adresse que vous recherchez est inconnue.")
            this.leafletDrawMarker(76.71667, -67.49972, 15, map,
              "L'adresse que vous recherchez est inconnue.")
          } // Adress is unknown.
        } // Data are collected.
      }) // this.request()
    } // address.value
  } // formSubmit()
  formCoordToGeonymSubmit (map) {
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
      this.leafletDrawMarker(76.71667, -67.49972, 15, map,
        'Les coordonnées saisies ne sont pas correctes.')
      return null
    }

    if (lat.value && lon.value) {
      // If a position is defined, let's geocode it thanks to geonym API.
      this.geonymAPILatLon(lat.value, lon.value, map, '')
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
          this.leafletDrawMarker(76.71667, -67.49972, 15, map,
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
            this.leafletDrawMarker(positionResult.properties.lat, positionResult.properties.lon, 15, map,
              '[ ' + parseFloat(positionResult.properties.lat).toFixed(6) + ' ; ' + parseFloat(positionResult.properties.lon).toFixed(6) + ' ]')
          } else {
            // Incorrect Geonym. Try again.
            this.userInfoError("Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
            this.leafletDrawMarker(76.71667, -67.49972, 15, map,
              "Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
          } // else
        } // else
      }) // request urlGeonym
    } // geonym.code && geonym.value defined.
  } // formSubmit()

  leafletDrawMarker (paramLatitude, paramLongitude, paramZoom, paramMap, paramMessage) {
    // Leaflet > Go to map coordinates.
    paramMap.setView([paramLatitude, paramLongitude], paramZoom)
    // Leaflet > ... and create a marker for these coordinates.
    L.marker([paramLatitude, paramLongitude]).addTo(paramMap)
      .bindPopup(paramMessage)
      .openPopup()
  }
  geonymAPILatLon (paramLatitude, paramLongitude, paramMap, paramLabel) {
    // Call Geonym API thanks to coordinates.

    // Let's calculate Geonym from coordinates.
    const URLGeonym = {
      method: 'GET',
      url: `${this.URLGeonym}/?` +
        `lat=` + paramLatitude +
        `&lon=` + paramLongitude
    }
    this.request(URLGeonym, (err, res, data) => {
      if (err) {
        // Error
        this.userInfoError(err)
        this.leafletDrawMarker(76.71667, -67.49972, 15, paramMap,
          "Il n'existe pas de coordonnées.")
      } else {
        var positionResult = JSON.parse(data)

        // Some coordinates received ?
        if (!positionResult.properties) {
          // No coordinates received.
          var userInfoText =
            'Les coordonnées renseignées sont en dehors de la grille définie. ' +
            '( Plage de latitude autorisée : ]' +
            positionResult.params.min_lat + ' ; ' + positionResult.params.max_lat + '[ ' +
            ' / Plage de longitude autorisée : ]' +
            positionResult.params.min_lon + ' ; ' + positionResult.params.max_lon + '[ ). '
          this.userInfoError(userInfoText)
          this.leafletDrawMarker(76.71667, -67.49972, 15, paramMap, userInfoText)
        } else {
          // Coordinates received. Let's draw new coordinates on the map.
          this.userInfoMessage({
            'Title_01': 'Coordonnées',
            'Text_01': parseFloat(paramLatitude).toFixed(6) + ` ; ` + parseFloat(paramLongitude).toFixed(6),
            'Title_02': 'Geonym',
            'Text_02':
              positionResult.properties.geonym.substring(0, 4) + `-` +
              positionResult.properties.geonym.substring(4, 8) + `/` +
              positionResult.properties.checksum
          })

          if (paramLabel === '') {
            // No paramLabel given, let's put coordinates for marker label.
            this.leafletDrawMarker(paramLatitude, paramLongitude, 15, paramMap,
              '[ ' + parseFloat(paramLatitude).toFixed(6) + ' ; ' + parseFloat(paramLongitude).toFixed(6) + ' ]')
          } else {
            // paramLabel given, let's put label for marker label.
            this.leafletDrawMarker(paramLatitude, paramLongitude, 15, paramMap,
              paramLabel)
          } // paramLabel
        } // else (coordinates received or not received.)
      } // else (error / No Error)
    }) // this.request
  }
  userInfoError (paramMessage) {
    // Put an error message into userInfo div.
    document.getElementById('userInfo').innerHTML = `
      <div class="alert alert-danger" role="alert">
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
