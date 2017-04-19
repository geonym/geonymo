// --------------------------------------------
// File        : ./test/specs/test_geocoding.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // -------------------------------------------------------------------
  // Test: #01 - Check that Address & Geonym corresponds to coordinates.
  // -------------------------------------------------------------------
  it('> Test > Gecoding > #01', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var address = $('#data-address')
    address.setValue('139 Rue de Bercy 75012 Paris')
    browser.click('#button-geocoding')
    browser.pause(1000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.841025/i
    var longitudeSolution = /2.377966/i
    var addressSolution = /139 Rue de Bercy 75012 Paris/i
    assert.strictEqual(addressSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP80-D2WN\/1/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })
})
