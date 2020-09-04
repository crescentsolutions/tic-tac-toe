'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

const gameStore = require('./../game-store.js')

const gameCreationSuccess = function (response) {
  gameStore.id = response.game._id
  $('#message').text('New game has started')
  $('#whos-turn').show()
  $('#role').show()
  $('#game-board').show()
  console.log('A game has been created!')
}
const gameCreationFailure = function (error) {
  $('#message').text('Could not create new game')
  $('#message').css('background-color', '$alert')
  $('#message').css('padding', '2em 0')

  console.log('error is ', error)
  console.log('Could not create new game')
}

const gameTrackingSuccess = function (response) {
  gameStore.id = response.game._id
  $('#message').text('Move has been tracked')

  const gameCells = response.game.cells
  const winningMessage = function () {
    $('#message').text('YOU ARE THE WINNER!!!')
    $('#message').css('font-size', '42px')
    $('#game-board').hide()
  }
  if (k) {
    if (gameCells[0] === gameCells[1] && gameCells[0] === gameCells[2]) {
      winningMessage()
      console.log('winning scenario 1')

      // middle row winner
    }  //  else if (gameCells[3] === gameCells[4] && gameCells[3] === gameCells[5]) {
   //   winningMessage()
   //   console.log('winning scenario 2')
   //
   //   // bottom row
   // }
  }

 // else if (gameCells[6] === gameCells[7] && gameCells[6] === gameCells[8]) {
  //   winningMessage()
  //
  //   // left column
  // } else if (gameCells[0] === gameCells[3] && gameCells[0] === gameCells[6]) {
  //   winningMessage()
  //
  //   // middle column
  // } else if (gameCells[1] === gameCells[4] && gameCells[1] === gameCells[7]) {
  //   winningMessage()
  //
  //   // last column
  // } else if (gameCells[2] === gameCells[5] && gameCells[2] === gameCells[8]) {
  //   winningMessage()
  //
  //   // diagonal going right
  // } else if (gameCells[0] === gameCells[4] && gameCells[0] === gameCells[8]) {
  //   winningMessage()
  //
  //   // diagonal going left
  // } else if (gameCells[2] === gameCells[4] && gameCells[2] === gameCells[6]) {
  //   winningMessage()
  // } else {
  //   $('#message').text('Tie Game')
  // }
}
const gameTrackingFailure = function (error) {
  $('#message').text('Could not track game play')
  console.log('Could not track game play')
  console.log('error is ', error)
}
module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure,
  gameTrackingSuccess: gameTrackingSuccess,
  gameTrackingFailure: gameTrackingFailure
}
