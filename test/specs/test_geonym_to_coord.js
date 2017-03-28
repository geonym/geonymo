// --------------------------------------------
// File        : ./test/specs/test_geonym_to_coord.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // ----------------------------------------------
  // Test    : #01
  // Context : Geonym to be decoded.
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #01', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('PP80-D2WN')
    var checksum = $('#data-checksum')
    checksum.setValue('1')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 48.8410312704 ; 2.3779689599999996 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.841031 ; 2.377969]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP80-D2WN/1')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #02
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #02', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('PP7F-7K90')
    var checksum = $('#data-checksum')
    checksum.setValue('T')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 48.849989  ; 2.350016 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.849989 ; 2.350016]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PP7F-7K90/T')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #03
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #03', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('PR6J-272L')
    var checksum = $('#data-checksum')
    checksum.setValue('C')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 48.845834  ; 2.775787 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.845834 ; 2.775787]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('PR6J-272L/C')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #04
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #04', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('N3C1-0344')
    var checksum = $('#data-checksum')
    checksum.setValue('0')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 48.686989  ; -1.911980 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.686989 ; -1.911980]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('N3C1-0344/0')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #05
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #05', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('R99K-L7LW')
    var checksum = $('#data-checksum')
    checksum.setValue('K')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 48.758006  ; 6.660501 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[48.758006 ; 6.660501]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('R99K-L7LW/K')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #06
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #06', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('6V8D-RKD0')
    var checksum = $('#data-checksum')
    checksum.setValue('V')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 50.128011 ; 3.082016 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[50.128011 ; 3.082016]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('6V8D-RKD0/V')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #07
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #07', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('WH5D-LTH4')
    var checksum = $('#data-checksum')
    checksum.setValue('V')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 43.376987 ; 2.708013 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[43.376987 ; 2.708013]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('WH5D-LTH4/V')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #08
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #08', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('FTMK-MJJ7')
    var checksum = $('#data-checksum')
    checksum.setValue('5')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 41.928707 ; 8.733759 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[41.928707 ; 8.733759]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('FTMK-MJJ7/5')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #09
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #09', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('4444-4444')
    var checksum = $('#data-checksum')
    checksum.setValue('0')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search('[ 51.449987 ; -5.449980 ]')
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinates = userInfo.search('[51.449987 ; -5.449980]')
    assert.notEqual(userInfoCoordinates, -1)
    var userInfoGeonym = userInfo.search('4444-4444/0')
    assert.notEqual(userInfoGeonym, -1)
  })

  // ----------------------------------------------
  // Test    : #10
  // Context : Check specific geonym
  // Result  : Check returned Coordinates & Geonym.
  // ----------------------------------------------
  it('> Test > Geonym_To_Coord > #10', function () {
    browser.url('http://localhost:3001')

    var code = $('#data-code')
    code.setValue('4444-4444')
    var checksum = $('#data-checksum')
    checksum.setValue('9')
    browser.click('#button-geonym-to-coord')

    var map = browser.getText('#map')
    var mapAddress = map.search("Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
    assert.notEqual(mapAddress, -1)
    var userInfo = browser.getText('#userInfo')
    var userInfoCoordinatesGeonym = userInfo.search("Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance.")
    assert.notEqual(userInfoCoordinatesGeonym, -1)
  })

})
