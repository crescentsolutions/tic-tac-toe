'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameInfo = require('./game/special')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#start-game').on('click', gameEvents.newGameEvent)
  $('#game-board').on('click', gameEvents.newTurnEvent)
})

function gameFeatures () {
  gameInfo.specialFeatures()
}
gameFeatures()
