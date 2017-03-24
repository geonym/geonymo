// ----------------------------------------------
// File        : ./src/templates/geonym/geonym.js
// Desciption  : Geonym template.
// Date        : 2017.03.19 > Fly
// ----------------------------------------------

exports.render = () => {
  return `
      <div class="content">
        <div class="container">
          <div class="row">

            <!-- ------------------ -->
            <!-- Geocoding & Geonym -->
            <!-- ------------------ -->
            <div class="col-lg-12">

              <!-- Title -->
              <div id="box-title" class="box-title">
                Geocoding & Geonym
              </div>

              <!-- Content -->
              <div class="box-content">

                <!-- Form -->
                <div class="container">
                <form>

                  <!-- Geocoding -->
                  <div class="form-group row">
                    <label class="col-lg-3 mt-sm-2" for="data-address">Adresse, lieu-dit, point d'intérêt... </label>
                    <input type="text" class="form-control col-lg-6" id="data-address" data-address placeholder="Saisissez une adresse... Ex: 139 Rue de Bercy 75012 Paris">
                    <div class="col-lg-1"></div>
                    <button type="submit" id="button-geocoding" class="btn btn-primary col-lg-2">Géocodage</button>
                  </div>

                  <!-- Coordinates to Geonym -->
                  <div class="form-group row">
                    <label class="col-lg-3 mt-sm-2" for="data-coord-to-geonym">Coordonnées </label>
                    <input type="text" class="form-control col-lg-2" id="data-latitude" data-latitude placeholder="Latitude">
                    <div class="col-lg-1"></div>
                    <input type="text" class="form-control col-lg-2" id="data-longitude" data-longitude placeholder="Longitude">
                    <div class="col-lg-2"></div>
                    <button type="submit" id="button-coord-to-geonym" class="btn btn-primary col-lg-2">Coord. to Geonym</button>
                  </div>

                  <!-- Geonym to Coordinates -->
                  <div class="form-group row">
                    <label class="col-lg-3 mt-sm-2" for="data-opec-to-coord">Geonym </label>
                    <input type="text" class="form-control col-lg-2" id="data-code" data-code placeholder="Code">
                    <div class="col-lg-1"></div>
                    <input type="text" class="form-control col-lg-2" id="data-checksum" data-checksum placeholder="Checksum">
                    <div class="col-lg-2"></div>
                    <button type="submit" id="button-geonym-to-coord" class="btn btn-primary col-lg-2">Geonym to Coord.</button>
                  </div>
                </form>
                </div class="container">

                <br>

                <!-- Users information -->
                <div id="userInfo"></div>

                <!-- Map -->
                <div id="map"></div>

              </div><!-- box-content -->

            </div><!-- col-lg-12 -->

          </div><!-- row -->
        </div><!-- container -->
      </div><!-- content -->
    `
}
