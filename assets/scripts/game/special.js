'use strict'

const linkSignUp = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
}
const linkSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}
const linkChangePw = function () {
  $('#sign-in').hide()
  $('#change-password').show()
}

// let x = true
// if (let turn = 0; turn <= 9; turn++) {
//   console.log('The role is currently ' + x)
//   console.log('Turn is currently ' + turn)
//   x = !x
//   console.log('The role is currently ' + x)
// }

module.exports = {
  linkSignUp: linkSignUp,
  linkSignIn: linkSignIn,
  linkChangePw: linkChangePw
}
