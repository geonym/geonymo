// -------------------------------
// File        : ./src/index.js
// Desciption  : Index definition.
// Date        : 2017.03.19 > Fly
// -------------------------------

import App from './app.js'

window.onload = () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  new App(header, main, footer).init()
}
