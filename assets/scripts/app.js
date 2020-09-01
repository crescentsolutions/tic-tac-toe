'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const specialEvents = require('./game/special')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#start-game').on('click', gameEvents.newGameEvent)
  $('.game-square').on('click', gameEvents.newTrackGamePiece)
  // Custom UI functions
  $('#sign-up-link').on('click', specialEvents.linkSignUp)
  $('#sign-in-link').on('click', specialEvents.linkSignIn)
})
