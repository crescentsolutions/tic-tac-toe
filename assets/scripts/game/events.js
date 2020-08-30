'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const newGameEvent = function (event) {
  event.preventDefault()

  const gamePiece = event.target
  const data = getGameData(gamePiece)
  console.log(gamePiece)
  console.log(data)
  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
  // end of newGame function
}

const newTurnEvent = function (event) {
  const gamePiece = event.target
  const selectSquare = function () {
    $(gamePiece).html('<h1>X</h1>')
  }
  selectSquare()
}

module.exports = {
  newGameEvent: newGameEvent,
  newTurnEvent: newTurnEvent
}
