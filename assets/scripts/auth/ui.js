'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  console.log('It worked!')
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed try again')
  console.log('error is ', error)
  console.log('There is an error', error)
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  console.log('It worked!')
  $('#sign-in-form').trigger('reset')
  $('#change-password').show('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password').hide()
}
const onSignInFailure = function (error) {
  $('#message').text('Sign in failed try again')
  $('#message').css('background-color', '#ff0000')
  $('#message').css('padding', '1em 0')
  console.log('error is ', error)
  console.log('Sign in failed')
}
const onChangePwSuccess = function () {
  $('#message').text('Success! Password has been changed ' + store.user.email)
  console.log('It worked!')
  $('#change-password').trigger('reset')
}
const onChangePwFailure = function (error) {
  $('#message').text('Password could not be changed')
  $('#message').text('Sign in failed try again')
  $('#message').css('background-color', '#ff0000')
  $('#message').css('padding', '1em 0')
  console.log('error is ', error)
  console.log('Sign in failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure
}
