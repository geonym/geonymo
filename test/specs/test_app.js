// --------------------------------------
// File        : ./test/specs/test_app.js
// Desciption  : Start App tests
// Date        : 2017.02.16 > Fly
// --------------------------------------

var assert = require('assert')

describe('webdriver.io page', function () {
  // ------------------------------------
  // Test    : #01
  // Context : App is not run.
  // Result  : Start page must be loaded.
  // ------------------------------------
  it('> Test > App > #01', function () {
    browser.url('http://localhost:3001')

    // Page title check.
    var title = browser.getTitle()
    assert.equal(title, 'POC-Geonym > Client API')

    // Title in the page.
    var pageTitle = browser.getText('#box-title')
    assert.equal(pageTitle, 'Bienvenue')
  })
})
