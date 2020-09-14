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
  $('#change-pw-link').hide()
  $('#change-password').show()
  $('#change-password').css('margin-top', '20px')
}

module.exports = {
  linkSignUp: linkSignUp,
  linkSignIn: linkSignIn,
  linkChangePw: linkChangePw
}
