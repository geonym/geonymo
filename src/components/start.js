// ----------------------------------------
// File        : ./src/components/start.js
// Desciption  : start component.
// Date        : 2017.03.19 > Fly
// ----------------------------------------

import BaseWebBase from '../basewebbase.js'
import Template from '../templates/start.js'

class Start extends BaseWebBase {
  constructor (body) {
    super()
    this.body = body
  }
  render () {
    this.body.innerHTML = Template.render()
  }
  clear () {
    this.body.innerHTML = ''
  }
}

module.exports = Start
