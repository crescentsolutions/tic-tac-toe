'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const store = require('./../game-store.js')

const gameCreationSuccess = function (response) {
  // store.user.id = response.user.id
  store.id = response.game._id
  console.log(store)
  // $('#message').text('New game has started ' + response.user.email)
  $('#message').text('New game has started')
  console.log('A game has been created!')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password').hide()
}
const gameCreationFailure = function (error) {
  $('#message').text('Could not create new game')
  console.log('error is ', error)
  console.log('Could not create new game')
}
module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure
}
