// --------------------------------------------------
// File        : ./test/specs/test_coord_to_geonym.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // ---------------------------------------------------------
  // Test: #01 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #01', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48.841025')
    var longitude = $('#data-longitude')
    longitude.setValue('2.377966')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.841025/i
    var longitudeSolution = /2.377966/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP80-D2WN\/1/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #02 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #02', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48.85')
    var longitude = $('#data-longitude')
    longitude.setValue('2.35')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.85000/i
    var longitudeSolution = /2.350000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP7F-7K90\/T/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ----------------------------------------------------------
  // Test: #03 - latitude & longitude can contain ',' in float.
  // ----------------------------------------------------------
  it('> Test > Coord_To_Geonym > #03', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48,85')
    var longitude = $('#data-longitude')
    longitude.setValue('2,35')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.85000/i
    var longitudeSolution = /2.350000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP7F-7K90\/T/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #04 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #04', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48,84583')
    var longitude = $('#data-longitude')
    longitude.setValue('2,27758')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.845830/i
    var longitudeSolution = /2.277580/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP7K-T6T1\/Y/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #05 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #05', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48,687')
    var longitude = $('#data-longitude')
    longitude.setValue('-1,912')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.687000/i
    var longitudeSolution = /-1.912000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /N3C1-0344\/0/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #06 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #06', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48,758')
    var longitude = $('#data-longitude')
    longitude.setValue('6,6605')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.758000/i
    var longitudeSolution = /6.660500/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /R99K-L7LW\/K/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #07 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #07', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('50,128')
    var longitude = $('#data-longitude')
    longitude.setValue('3,082')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /50.128000/i
    var longitudeSolution = /3.082000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /6V8D-RKD0\/V/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #08 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #08', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('43,377')
    var longitude = $('#data-longitude')
    longitude.setValue('2,708')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /43.377000/i
    var longitudeSolution = /2.708000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /WH5D-LTH4\/V/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #09 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #09', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('41,92872')
    var longitude = $('#data-longitude')
    longitude.setValue('8,733778')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /41.928720/i
    var longitudeSolution = /8.733778/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /FTMK-MJJ7\/5/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------------------------
  // Test: #10 - Check that Geonym corresponds to coordinates.
  // ---------------------------------------------------------
  it('> Test > Coord_To_Geonym > #10', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('51,45')
    var longitude = $('#data-longitude')
    longitude.setValue('-5,45')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /51.450000/i
    var longitudeSolution = /-5.450000/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /4444-4444\/0/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // --------------------------------------------------------------------
  // Test: #11 - If latitude or longitude are not floats, return a error.
  // --------------------------------------------------------------------
  it('> Test > Coord_To_Geonym > #11', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48;841025')
    var longitude = $('#data-longitude')
    longitude.setValue('2;377966')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var errorSolution = /Les coordonnées saisies ne sont pas correctes./i
    assert.strictEqual(errorSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(errorSolution.test(userInfo), true)
  })

  // --------------------------------------
  // Test: #12 - latitude must be <= 51.45.
  // --------------------------------------
  it('> Test > Coord_To_Geonym > #12', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('100.00')
    var longitude = $('#data-longitude')
    longitude.setValue('0.00')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var errorSolution = /Les coordonnées saisies sont en dehors de la grille France métropolitaine./i
    assert.strictEqual(errorSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(errorSolution.test(userInfo), true)
  })

  // --------------------------------------
  // Test: #13 - latitude must be >= 40.91.
  // --------------------------------------
  it('> Test > Coord_To_Geonym > #13', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('0.00')
    var longitude = $('#data-longitude')
    longitude.setValue('0.00')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var errorSolution = /Les coordonnées saisies sont en dehors de la grille France métropolitaine./i
    assert.strictEqual(errorSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(errorSolution.test(userInfo), true)
  })

  // ---------------------------------------
  // Test: #14 - longitude must be >= -5.45.
  // ---------------------------------------
  it('> Test > Coord_To_Geonym > #14', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48.85')
    var longitude = $('#data-longitude')
    longitude.setValue('-10.00')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var errorSolution = /Les coordonnées saisies sont en dehors de la grille France métropolitaine./i
    assert.strictEqual(errorSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(errorSolution.test(userInfo), true)
  })

  // --------------------------------------
  // Test: #15 - longitude must be <= 9.80.
  // --------------------------------------
  it('> Test > Coord_To_Geonym > #15', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var latitude = $('#data-latitude')
    latitude.setValue('48.85')
    var longitude = $('#data-longitude')
    longitude.setValue('10.00')
    browser.click('#button-coord-to-geonym')

    // Check map div
    var map = browser.getText('#map')
    var errorSolution = /Les coordonnées saisies sont en dehors de la grille France métropolitaine./i
    assert.strictEqual(errorSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(errorSolution.test(userInfo), true)
  })
})
