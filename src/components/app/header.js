// --------------------------------------------
// File        : ./src/components/app/header.js
// Desciption  : header component.
// Date        : 2017.03.19 > Fly
// --------------------------------------------

import BaseWebBase from '../../basewebbase.js'
import Template from '../../templates/app/header.js'

class Header extends BaseWebBase {
  constructor (body) {
    super()
    this.body = body
  }
  render () {
    this.body.innerHTML = Template.render()
  }
} // class Header

module.exports = Header
