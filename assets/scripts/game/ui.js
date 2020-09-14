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
  $('#message').css('font-size', '20px')
}
const gameCreationFailure = function (error) {
  $('#message').text('Could not create new game')
  $('#message').css('background-color', '$alert')
  $('#message').css('padding', '2em 0')
}

const gameTrackingSuccess = function (response) {
  gameStore.id = response.game._id
  console.log('This is from ui.js')
  console.log(response.game.over)
  console.log(response.game.cells)

  const winningMessage = function () {
    // $('#message').text('Player: ' + 'YOU ARE THE WINNER!!!')
    // console.log('YOU ARE THE WINNER!!!')
    // $('#message').css('font-size', '32px')
    $('#whos-turn').hide()
    // $('#game-board').hide()
  }

  if (response.game.over === true) {
    winningMessage()
  } else {
    $('#message').text('Your move was successful')
  }
}

const gameTrackingFailure = function (error) {
  $('#message').text('Could not track game play')
}

module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure,
  gameTrackingSuccess: gameTrackingSuccess,
  gameTrackingFailure: gameTrackingFailure
}
