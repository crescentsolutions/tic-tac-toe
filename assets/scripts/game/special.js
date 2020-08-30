'use strict'

const specialFeatures = function () {}
const role = function () {
  $('#role').html('<h1>X</h1>')
}
role()

// let x = true
// if (let turn = 0; turn <= 9; turn++) {
//   console.log('The role is currently ' + x)
//   console.log('Turn is currently ' + turn)
//   x = !x
//   console.log('The role is currently ' + x)
// }

module.exports = {
  specialFeatures: specialFeatures
}
