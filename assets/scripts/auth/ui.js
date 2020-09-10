'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  console.log('It worked!')
  $('#sign-in').show()
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#game-board').hide()
}
const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed try again')
  console.log('error is ', error)
  console.log('There is an error', error)
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#message').css('font-size', '16px')
  console.log('It worked!')
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#message-change-password').text('You have signed in. Please change your password')
  $('.start-game').show()
  $('.sign-out').show()
}
const onSignInFailure = function (error) {
  $('#message').text('Sign in failed try again')
  $('#message').css('background-color', '#ff0000')
  $('#message').css('padding', '1em 0')
  console.log('error is ', error)
  console.log('Sign in failed')
}
const onSignOutSuccess = function (response) {
  $('#message').text('You are logged out')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#game-board').hide()
  $('.sign-out').hide()
  console.log('It worked!')
}
const onSignOutFailure = function (error) {
  $('#message').text('Could not sign out')
  $('#message').css('background-color', '$alert')
  $('#message').css('padding', '2em 0')
  console.log('error is ', error)
  console.log('Could not sign out')
}
const onChangePwSuccess = function () {
  $('#message').text('Success! Password has been changed ' + store.user.email)
  $('#sign-in').show()
  console.log('It worked!')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').hide()
  $('#message').text('Your password was successfully changed')
}
const onChangePwFailure = function (error) {
  $('#message').text('Password could not be changed')
  $('#message').css('background-color', '#ff0000')
  $('#message').css('padding', '1em 0')
  console.log('error is ', error)
  console.log('Password could not be changed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePwSuccess,
  onChangePwFailure
}
