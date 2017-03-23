// ---------------------------------------
// File        : ./src/templates/start.js
// Desciption  : start template.
// Date        : 2017.03.19 > Fly
// ---------------------------------------

exports.render = start => {
  return `
      <div class="content">
        <div class="container">
          <div class="row">

            <!-- ---------- -->
            <!-- Column #01 -->
            <!-- ---------- -->
            <div class="col-lg-2"></div>


            <!-- ------------------------------- -->
            <!-- Column #02 > Intro BlaBlaBla... -->
            <!-- ------------------------------- -->
            <div class="col-lg-8">

              <!-- Title -->
              <div id="box-title" class="box-title">
                Bienvenue
              </div>

              <!-- Text -->
              <div class="box-content">
                <br>
                Bienvenue sur l'application <strong>Geonym</strong>.
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
              </div><!-- box-content -->
            </div><!-- col-lg-8 -->

            <!-- ---------- -->
            <!-- Column #03 -->
            <!-- ---------- -->
            <div class="col-lg-2"></div>

          </div><!-- row -->
        </div><!-- container -->
      </div><!-- content -->
    `
}
