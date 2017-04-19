// --------------------------------------------------
// File        : ./test/specs/test_geonym_to_coord.js
// Desciption  : Geocoding tests
// Date        : 2017.03.27 > Fly
// --------------------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // ------------------------------------------------
  // Test: #01 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #01', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('PP80-D2WN')
    var checksum = $('#data-checksum')
    checksum.setValue('1')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.841031/i
    var longitudeSolution = /2.377969/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP80-D2WN\/1/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #02 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #02', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('PP7F-7K90')
    var checksum = $('#data-checksum')
    checksum.setValue('T')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.849989/i
    var longitudeSolution = /2.350016/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PP7F-7K90\/T/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #03 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #03', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('PR6J-272L')
    var checksum = $('#data-checksum')
    checksum.setValue('C')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.845834/i
    var longitudeSolution = /2.775787/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /PR6J-272L\/C/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #04 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #04', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('N3C1-0344')
    var checksum = $('#data-checksum')
    checksum.setValue('0')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.686989/i
    var longitudeSolution = /-1.911980/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /N3C1-0344\/0/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #05 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #05', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('R99K-L7LW')
    var checksum = $('#data-checksum')
    checksum.setValue('K')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /48.758006/i
    var longitudeSolution = /6.660501/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /R99K-L7LW\/K/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #06 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #06', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('6V8D-RKD0')
    var checksum = $('#data-checksum')
    checksum.setValue('V')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /50.128011/i
    var longitudeSolution = /3.082016/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /6V8D-RKD0\/V/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #07 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #07', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('WH5D-LTH4')
    var checksum = $('#data-checksum')
    checksum.setValue('V')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /43.376987/i
    var longitudeSolution = /2.708013/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /WH5D-LTH4\/V/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #08 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #08', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('FTMK-MJJ7')
    var checksum = $('#data-checksum')
    checksum.setValue('5')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /41.928707/i
    var longitudeSolution = /8.733759/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /FTMK-MJJ7\/5/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ------------------------------------------------
  // Test: #09 - Check that Geonym gives coordinates.
  // ------------------------------------------------
  it('> Test > Geonym_To_Coord > #09', function () {
    browser.url('http://localhost:3001')

    // Insert data into the form
    var code = $('#data-code')
    code.setValue('4444-4444')
    var checksum = $('#data-checksum')
    checksum.setValue('0')
    browser.click('#button-geonym-to-coord')
    browser.pause(3000)

    // Check map div
    var map = browser.getText('#map')
    var latitudeSolution = /51.449987/i
    var longitudeSolution = /-5.449980/i
    assert.strictEqual(latitudeSolution.test(map), true)
    assert.strictEqual(longitudeSolution.test(map), true)

    // Check userInfo div
    var userInfo = browser.getText('#userInfo')
    assert.strictEqual(latitudeSolution.test(userInfo), true)
    assert.strictEqual(longitudeSolution.test(userInfo), true)
    var geonymSolution = /4444-4444\/0/i
    assert.strictEqual(geonymSolution.test(userInfo), true)
  })

  // ---------------------------------------
  // Test: #10 - Check that Geonym is wrong.
  // ---------------------------------------
  it('> Test > Geonym_To_Coord > #10', function () {
  browser.url('http://localhost:3001')

  // Insert data into the form
  var code = $('#data-code')
  code.setValue('4444-4444')
  var checksum = $('#data-checksum')
  checksum.setValue('9')
  browser.click('#button-geonym-to-coord')
  browser.pause(3000)

  // Check map div
  var map = browser.getText('#map')
  var errorSolution = /Le Geonym saisi est incorrect. Vérifiez le code ainsi que son checksum. Merci d'avance./i
  assert.strictEqual(errorSolution.test(map), true)

  var userInfo = browser.getText('#userInfo')
  assert.strictEqual(errorSolution.test(userInfo), true)
  })
})
