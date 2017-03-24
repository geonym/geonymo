// ------------------------------
// File        : ./src/app.js
// Desciption  : App definition.
// Date        : 2017.03.19 > Fly
// ------------------------------

import BaseWebBase from './basewebbase.js'
import Header from './components/app/header.js'
import Geonym from './components/geonym/geonym.js'

class App extends BaseWebBase {
  constructor (app, header, main, footer) {
    super()
    this.header = new Header(header)
    this.geonym = new Geonym(main)
  }
  init () {
    this.header.render()
    this.geonym.render()
  }
} // App

module.exports = App
