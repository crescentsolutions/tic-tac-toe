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

  $('#role').text(turn)

  // Clear game board
  $('.game-square').text('')

  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}

const newTrackGamePiece = function (event) {
  event.preventDefault()
  // get position and player
  const selectedSquare = event.target

  const checkBlankSquare = $(selectedSquare).text()

  // prevent user from overriding square
  if (checkBlankSquare === '') {
    // change players for next Turn
    if (turn === 'O') {
      turn = 'X'
    } else {
      turn = 'O'
    }
    $(selectedSquare).text(turn)
  } else {
    $('#message').text('This square is occupied. Try again.')
  } // end of track game square

  const currentPlayer = turn
  api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  newTrackGamePiece: newTrackGamePiece
}
