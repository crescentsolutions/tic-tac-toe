'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const store = require('./../store.js')

const gameCreationSuccess = function (response) {
  store.user = response.user
  console.log(store)
  $('#message').text('New game has started ' + response.user.email)
  console.log('It worked!')
  $('#sign-in-form').trigger('reset')
  $('#change-password').show('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password').hide()
}
const gameCreationFailure = function (error) {
  $('#message').text('Sign up failed try again')
  console.log('error is ', error)
  console.log('Sign in failed')
}
module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure
}
