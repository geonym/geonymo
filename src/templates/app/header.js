// -------------------------------------------
// File        : ./src/templates/app/header.js
// Desciption  : header template.
// Date        : 2017.03.19 > Fly
// -------------------------------------------

var mustache = require('mustache')

exports.render = () => {
  var htmlToRender = `
  <nav class="navbar navbar-fixed-top navbar-light background-white border-bottom-grey">
    <div class="container">

      <!-- ----- -->
      <!-- Brand -->
      <!-- ----- -->
      <a class="navbar-brand">
        <img src="../../img/logo_RF.jpg" width="111" height="60" alt="logo">
        <span>Geonym</span>
        <span class="align-top beta">beta</span>
      </a>

    </div><!-- Header container -->
  </nav><!-- Header nav -->
  `
  return mustache.render(htmlToRender)
}
