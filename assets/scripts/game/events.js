'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const getGameData = require('./../../../lib/add-nested-value')
const api = require('./api')
const ui = require('./ui')

const newGameEvent = function (event) {
  event.preventDefault()

  const gamePiece = event.target
  const data = getGameData(gamePiece)
  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)

  const selectSquare = function () {
    $(gamePiece).html('<h1>X</h1>')
  }
  selectSquare()
  // end of onGameBoard function
}

module.exports = {
  newGameEvent: newGameEvent
}
