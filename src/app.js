// ------------------------------
// File        : ./src/app.js
// Desciption  : App definition.
// Date        : 2017.03.19 > Fly
// ------------------------------

import BaseWebBase from './basewebbase.js'
import Header from './components/app/header.js'
import Start from './components/start.js'
import Geonym from './components/geonym/geonym.js'

class App extends BaseWebBase {
  constructor (app, header, main, footer) {
    super()
    this.session = {}
    this.header = new Header(header)
    this.start = new Start(main)
    this.geonym = new Geonym(main)
  }
  init () {
    // this.session = {}
    this.header.render()
    this.start.render()
    this.addEventListener()
  }
  addEventListener () {
    this.headerEvents()
  }
  headerEvents () {
    this.header.on('geonym_call', () => this.geonym.render())
  }
} // App

module.exports = App
