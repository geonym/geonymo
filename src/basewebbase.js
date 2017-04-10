// ---------------------------------
// File        : ./src/pocwebbase.js
// Desciption  : BaseWebBase class.
// Date        : 2017.03.19 > Fly
// ---------------------------------

import TinyEmitter from 'tiny-emitter'
import request from 'browser-request'

class BaseWebBase extends TinyEmitter {
  constructor () {
    super()
    this.request = request
    this.URLGeocoding = 'http://api-adresse.data.gouv.fr'
    this.URLGeonym = 'http://api.geonym.fr'
  }
}

module.exports = BaseWebBase
