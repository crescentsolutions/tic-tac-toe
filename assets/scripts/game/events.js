'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let turn = 'X'

const newGameEvent = function (event) {
  event.preventDefault()
  const submitNewGame = event.target
  const data = getGameData(submitNewGame)
  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}
//
// const newAddGamePiece = function (event) {
//   event.preventDefault()
//   const gamePiece = event.target
//   const data = getGameData(gamePiece)
//   api.newGamePiece(data)
//     .then(ui.addGamePieceSuccess)
//     .catch(ui.addGamePieceFailure)
// }
//
const newTrackGamePiece = function (event) {
  event.preventDefault()

  // get position and player
  const selectedSquare = event.target
  const currentPlayer = turn

  // change players for next Turn
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  }

  api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  // newAddGamePiece: newAddGamePiece,
  newTrackGamePiece: newTrackGamePiece
}
