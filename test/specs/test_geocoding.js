// --------------------------------------------
// File        : ./test/specs/test_geocoding.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // --------------------------------------------------------
  // Test    : #01
  // Action  : Address to be geocoded.
  // Result  : Check returned Address & Coordinates & Geonym.
  // --------------------------------------------------------
  it('> Test > Gecoding > #01', function () {
    browser.url('http://localhost:3001')

    var address = $('#data-address')
    address.setValue('139 Rue de Bercy 75012 Paris')
    browser.click('#button-geocoding')
    browser.pause(3000)

    var map = browser.getText('#map')
    var mapAddress = map.search('139 Rue de Bercy 75012 Paris')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[ 48.841025 ; 2.377966]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP80-D2WN/1')
    assert.notEqual(userInfoGeonym, -1)
  })

})
