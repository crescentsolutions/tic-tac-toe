'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const specialEvents = require('./game/special')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)
  // Game
  $('#start-game').on('click', gameEvents.newGameEvent)
  $('.game-square').on('click', gameEvents.newTrackGamePiece)
  $('#view-game-history').on('click', gameEvents.newGameHistory)
  // Custom UI functions
  $('#sign-up-link').on('click', specialEvents.linkSignUp)
  $('#sign-in-link').on('click', specialEvents.linkSignIn)
  $('#change-pw-link').on('click', specialEvents.linkChangePw)
})
