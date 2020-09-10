'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
// Source: https://www.w3schools.com/jsref/prop_node_innertext.asp

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let turn = 'X'
const winner = true

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

  const checkBlankSquare = $(selectedSquare).text()

  // prevent user from overriding square
  if (checkBlankSquare === '') {
    // change players for next Turn
    $(selectedSquare).text(turn)
    if (turn === 'O') {
      turn = 'X'
    } else {
      turn = 'O'
    }
    $('#role').text(turn)
  } else {
    $('#message').text('This square is occupied. Try again.')
  }

  const checkGameWinner = function (checkStatus) {
    const gameSquare = $('.game-square')
    // const checkSquareValue = $('.game-square').text()

    // checking winning combinations
    // .text not working so had to switch to .innerText
    if (gameSquare[0].innerText === gameSquare[1].innerText && gameSquare[0].innerText === gameSquare[2].innerText && gameSquare[0].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus
    }
    // else {
    //   // $('#message').text('It is a draw!')
    //   console.log('the game is still going')
    //   return !checkStatus
    // }
      // middle row winner
      else if (gameSquare[3].innerText === gameSquare[4].innerText && gameSquare[3].innerText === gameSquare[5].innerText && gameSquare[3].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus

      // bottom row
    } else if (gameSquare[6].innerText === gameSquare[7].innerText && gameSquare[6].innerText === gameSquare[8].innerText && gameSquare[6].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus
      // left column
    } else if (gameSquare[0].innerText === gameSquare[3].innerText && gameSquare[0].innerText === gameSquare[6].innerText && gameSquare[0].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus

      // middle column
    } else if (gameSquare[1].innerText === gameSquare[4].innerText && gameSquare[1].innerText === gameSquare[7].innerText && gameSquare[1].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus

      // last column
    } else if (gameSquare[2].innerText === gameSquare[5].innerText && gameSquare[2].innerText === gameSquare[8].innerText && gameSquare[2].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus

      // diagonal going right
    } else if (gameSquare[0].innerText === gameSquare[4].innerText && gameSquare[0].innerText === gameSquare[8].innerText && gameSquare[0].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus

      // diagonal going left
    } else if (gameSquare[2].innerText === gameSquare[4].innerText && gameSquare[2].innerText === gameSquare[6].innerText && gameSquare[2].innerText !== '') {
      $(selectedSquare).text('')
      return checkStatus
    }

    // will return x or o
    // console.log(checkSquareValue)
    // will return text
    // console.log(gameSquare[0].innerText)
    // console.log(gameSquare[1].innerText)
    // console.log(gameSquare[2].innerText)
    //
    // console.log('what does this return?')
    // returns an array of game squares with corresponding key
    // console.log(gameSquare)

    // End of checkGameWinner
  }
  console.log('This is from events.js - checking the winner')
  console.log(checkGameWinner(winner))
  const gameStatus = checkGameWinner(winner)
  const currentPlayer = turn

  api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer, gameStatus)
    .then(ui.gameTrackingSuccess)
    .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  newTrackGamePiece: newTrackGamePiece
}
