'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
// Source: https://www.w3schools.com/jsref/prop_node_innertext.asp

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let turn = 'X'
const gameIsOver = true

const newGameEvent = function (event) {
  event.preventDefault()
  const submitNewGame = event.target
  const data = getGameData(submitNewGame)

  $('.get-started').hide()
  $('#role').text(turn)

  // Clear game board
  $('.game-square').text('')

  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}

// const onGetStats = function () {
//
// }

const newTrackGamePiece = function (event) {
  event.preventDefault()
  // get position and player
  const selectedSquare = event.target
  const currentPlayer = function () {
    if ($(selectedSquare).text() === 'X') {
      return $(selectedSquare).text()
    } else if ($(selectedSquare).text() === 'O') {
      return $(selectedSquare).text()
    } else {
      $('#message').text('Please try again.')
    }
  }

  // start of test
  const checkBlankSquare = $(selectedSquare).text()
  // prevent user from overriding square
  if (checkBlankSquare === '') {
    // display game piece
    $(selectedSquare).text(turn)
    if (turn === 'O') {
      turn = 'X'
    } else {
      turn = 'O'
      $('#message').text('This square is occupied. Try again.')
    }
  }
  $('#role').text(turn)

  // end of test

  const gameSquare = $('.game-square')
  const checkGameWinner = function (checkStatus) {
    const winningMessage = function () {
      $('#message').text('Player ' + $(selectedSquare).text() + ': YOU ARE THE WINNER!!!')
      $('#game-board').hide()
    }
    const winningMessageTie = function () {
      $('#message').text('Players X & O: There is a TIE')
      $('#game-board').hide()
    }

    // checking winning combinations
    // .text not working so had to switch to .innerText
    if (gameSquare[0].innerText === gameSquare[1].innerText && gameSquare[0].innerText === gameSquare[2].innerText && gameSquare[0].innerText !== '') {
      winningMessage()
      return checkStatus

      // middle row winner
    } else if (gameSquare[3].innerText === gameSquare[4].innerText && gameSquare[3].innerText === gameSquare[5].innerText && gameSquare[3].innerText !== '') {
      winningMessage()
      return checkStatus

      // bottom row
    } else if (gameSquare[6].innerText === gameSquare[7].innerText && gameSquare[6].innerText === gameSquare[8].innerText && gameSquare[6].innerText !== '') {
      winningMessage()
      return checkStatus
      // left column
    } else if (gameSquare[0].innerText === gameSquare[3].innerText && gameSquare[0].innerText === gameSquare[6].innerText && gameSquare[0].innerText !== '') {
      winningMessage()
      return checkStatus

      // middle column
    } else if (gameSquare[1].innerText === gameSquare[4].innerText && gameSquare[1].innerText === gameSquare[7].innerText && gameSquare[1].innerText !== '') {
      winningMessage()
      return checkStatus

      // last column
    } else if (gameSquare[2].innerText === gameSquare[5].innerText && gameSquare[2].innerText === gameSquare[8].innerText && gameSquare[2].innerText !== '') {
      winningMessage()
      return checkStatus

      // diagonal going right
    } else if (gameSquare[0].innerText === gameSquare[4].innerText && gameSquare[0].innerText === gameSquare[8].innerText && gameSquare[0].innerText !== '') {
      winningMessage()
      return checkStatus

      // diagonal going left
    } else if (gameSquare[2].innerText === gameSquare[4].innerText && gameSquare[2].innerText === gameSquare[6].innerText && gameSquare[2].innerText !== '') {
      winningMessage()
      return checkStatus
    } else if (gameSquare[0].innerText !== '' && gameSquare[1].innerText !== '' && gameSquare[2].innerText !== '' && gameSquare[3].innerText !== '' && gameSquare[4].innerText !== '' && gameSquare[5].innerText !== '' && gameSquare[6].innerText !== '' && gameSquare[7].innerText !== '' && gameSquare[8].innerText !== '') {
      winningMessageTie()
      return gameIsOver
    }
    // end of checkGameWinner
  }

  const gameStatus = checkGameWinner(gameIsOver)

  api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer, gameStatus)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
// end of newTrackGamePiece
}

module.exports = {
  newGameEvent: newGameEvent,
  newTrackGamePiece: newTrackGamePiece
}
