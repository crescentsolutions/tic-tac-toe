'use strict'

const role = function () {
  $('#role').html('<h1>X</h1>')
}
role()

const linkSignUp = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
}

// let x = true
// if (let turn = 0; turn <= 9; turn++) {
//   console.log('The role is currently ' + x)
//   console.log('Turn is currently ' + turn)
//   x = !x
//   console.log('The role is currently ' + x)
// }

module.exports = {
  linkSignUp: linkSignUp
}
