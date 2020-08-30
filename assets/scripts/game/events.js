'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const newGameEvent = function (event) {
  event.preventDefault()

  const submitNewGame = event.target
  const data = getGameData(submitNewGame)
  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}

const newAddGamePiece = function (event) {
  event.preventDefault()
  const gamePiece = event.target
  const data = getGameData(gamePiece)
  api.trackGame(data)
    .then(ui.addGamePieceSuccess)
    .catch(ui.addGamePieceFailure)
}

const newTrackGamePiece = function (event) {
  event.preventDefault()

  const selectedSquare = event.target
  console.log('Here is the selectedSquare: ')
  console.log(selectedSquare.dataset.cellIndex)
  const data = getGameData(selectedSquare)
  api.trackGame(data)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  newAddGamePiece: newAddGamePiece,
  newTrackGamePiece: newTrackGamePiece
}
