// --------------------------------------------
// File        : ./test/specs/test_coord_to_geonym.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // ----------------------------------------------
  // Test    : #01
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #01', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48.841025')
    var longitude = $('#data-longitude')
    longitude.setValue('2.377966')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.841025 ; 2.377966 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.841025 ; 2.377966]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP80-D2WN/1')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #02
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #02', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48.85')
    var longitude = $('#data-longitude')
    longitude.setValue('2.35')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.850000 ; 2.350000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.850000 ; 2.350000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP7F-7K90/T')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #03
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #03', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48,85')
    var longitude = $('#data-longitude')
    longitude.setValue('2,35')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.850000 ; 2.350000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.850000 ; 2.350000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP7F-7K90/T')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #04
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #04', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48,84583')
    var longitude = $('#data-longitude')
    longitude.setValue('2,27758')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.845830 ; 2.277580 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.845830 ; 2.277580]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP7K-T6T1/Y')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #05
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #05', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48,687')
    var longitude = $('#data-longitude')
    longitude.setValue('-1,912')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.687000 ; -1.912000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.687000 ; -1.912000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('N3C1-0344/0')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #06
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #06', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48,758')
    var longitude = $('#data-longitude')
    longitude.setValue('6,6605')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 48.758000 ; 6.660500 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.758000 ; 6.660500]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('R99K-L7LW/K')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #07
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #07', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('50,128')
    var longitude = $('#data-longitude')
    longitude.setValue('3,082')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 50.128000 ; 3.082000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[50.128000 ; 3.082000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('6V8D-RKD0/V')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #08
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #08', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('43,377')
    var longitude = $('#data-longitude')
    longitude.setValue('2,708')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 43.377000 ; 2.708000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[43.377000 ; 2.708000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('WH5D-LTH4/V')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #09
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #09', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('41,92872')
    var longitude = $('#data-longitude')
    longitude.setValue('8,733778')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 41.928720 ; 8.733778 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[41.928720 ; 8.733778]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('FTMK-MJJ7/5')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #10
  // Context : Coordinates to be geonymed.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Coord_To_Geonym > #10', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('51,45')
    var longitude = $('#data-longitude')
    longitude.setValue('-5,45')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('[ 51.450000 ; -5.450000 ]')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[51.450000 ; -5.450000]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('4444-4444/0')
    assert.notEqual(userInfoGeonym, -1)
  })

  // --------------------------------------------------------------
  // Test    : #11
  // Context : Coordinates to be geonymed.
  // Result  : Latitude & Longitude are not floats. Error returned.
  // --------------------------------------------------------------
  it('> Test > Coord_To_Geonym > #11', function () {
    browser.url('http://localhost:3001')

    var latitude = $('#data-latitude')
    latitude.setValue('48;841025')
    var longitude = $('#data-longitude')
    longitude.setValue('2;377966')
    browser.click('#button-coord-to-geonym')

    var map = browser.getText('#map')
    var mapPosition = map.search('Les coordonnées saisies ne sont pas correctes.')
    assert.notEqual(mapPosition, -1)

    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('Les coordonnées saisies ne sont pas correctes.')
    assert.notEqual(userInfoCoordinates, -1)
  })

})
