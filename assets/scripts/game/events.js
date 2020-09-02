'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let turn = 'O'

const newGameEvent = function (event) {
  event.preventDefault()
  const submitNewGame = event.target
  const data = getGameData(submitNewGame)

  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}

const newTrackGamePiece = function (event) {
  event.preventDefault()

  // get position and player
  const selectedSquare = event.target

  const checkBlankSquare = $(selectedSquare).text()
  // console.log('Is this square blank? ' + checkBlankSquare)
  // prevent user from overriding square
  if (checkBlankSquare === '') {
    // console.log('It is blank')
    // change players for next Turn
    if (turn === 'O') {
      turn = 'X'
    } else {
      turn = 'O'
    }
    $('#role').text(turn)
    // display game piece
    $(selectedSquare).text(turn)
  } else {
    $('#message').text('This square is occupied. Try again.')
    // console.log('This square is occupied. Try again.')
  }

  const currentPlayer = turn

  api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  newTrackGamePiece: newTrackGamePiece
}
