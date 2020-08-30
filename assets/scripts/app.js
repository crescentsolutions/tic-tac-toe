'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameInfo = require('./game/special')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#game-board').on('click', gameEvents.newGameEvent)
})

function gameFeatures () {
  gameInfo.specialFeatures()
}
gameFeatures()
