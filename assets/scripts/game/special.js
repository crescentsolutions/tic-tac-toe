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
  // $('#sign-in').hide()
  $('#message').hide()
  $('#message-sign-in').text('Please sign in before you change your password')
  $('#message-change-password').text('You must sign in first')
  $('#sign-up-link').hide()
  $('#change-pw-link').hide()
  $('#change-password').show()
  $('#change-password').css('margin-top', '20px')
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
