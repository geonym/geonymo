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

      <!-- ---- -->
      <!-- Menu -->
      <!-- ---- -->
      <ul class="nav navbar-nav float-lg-right header-center-middle">

        <li class="nav-item dropdown">
          <button id="button-menu" type="button" class="btn header-button-menu" data-toggle="dropdown"><i class="fa fa-sign-in"></i></button>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

            <!-- ------ -->
            <!-- Geonym -->
            <!-- ------ -->
            <a id="button-geonym" class="dropdown-item" button-geonym>
              <i class="fa fa-barcode color-blue"></i>
              <span>&nbsp; Geocoding & Geonym...</span>
            </a>

          </div><!-- dropdown-menu -->
        </li><!-- nav-item -->
      </ul><!-- Header menu -->

    </div><!-- Header container -->
  </nav><!-- Header nav -->
  `
  return mustache.render(htmlToRender)
}
