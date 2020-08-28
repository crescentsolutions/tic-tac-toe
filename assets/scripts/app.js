'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#game-board').on('click', authEvents.onGameBoard)
})
