'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://api.jquery.com/category/events/form-events/
// Source: https://www.tutorialrepublic.com/faq/how-to-check-an-element-is-visible-or-not-using-jquery.php

const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#message').css('border', 'solid 5px #fff')
  $('#sign-in').show()
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#game-board').hide()
}
const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
  $('input').on('focus', function () {
    $('#message-container').hide()
    $('#message').hide()
  })
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#message-sign-in').text('')
  $('#message').text('You are signed in')
  $('#message').css('border', 'solid 5px #fff')
  $('#message').css('font-size', '16px')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#message-change-password').text('You have signed in. Please change your password')
  if ($('#change-password').is(':visible')) {
    $('.start-game').hide()
  } else {
    $('.start-game').show()
  }
  $('.sign-out').show()
}
const onSignInFailure = function (error) {
  $('#message').text('Sign in failed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
  if (error.statusText == 'Unauthorized') {
    $('#message-sign-in').text('You have entered the wrong credentials. Try again.')
    $('#sign-in-email').css('background', 'rgba(240, 52, 52, .5)')
    $('#sign-in-password').css('background', 'rgba(240, 52, 52, .5)')
    $('input').on('focus', function () {
      $('#sign-in-email').css('background', 'rgb(255, 255, 255)')
      $('#sign-in-password').css('background', 'rgb(255, 255, 255)')
    })
  } else {
    $('#message').text('Sign in failed. Please try again.')
    $('#message').css('border', 'solid 5px #fff')
  }
}
const onSignOutSuccess = function (response) {
  $('#message').text('You are logged out')
  $('#message').css('border', 'solid 5px #fff')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up-link').show()
  $('#change-pw-link').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.start-game').hide()
  $('#whos-turn').hide()
  $('#game-board').hide()
  $('input').on('focus', function () {
    $('#message-container').hide()
  })
}
const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
  $('input').on('focus', function () {
    $('#message-container').hide()
  })
}
const onChangePwSuccess = function () {
  $('#message').show()
  $('#message').text('Your password was successfully changed. You are logged in.')
  $('#message').css('border', 'solid 5px #fff')
  $('#sign-in').show()
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').hide()
  $('.start-game').show()
}
const onChangePwFailure = function (error) {
  $('#message').text('Password could not be changed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
  $('input').on('focus', function () {
    $('#message-container').hide()
  })
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
