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
  console.log('This is from ui.js')
  console.log(response.game.over)

  const winningMessage = function () {
    $('#message').text('YOU ARE THE WINNER!!!')
    console.log('YOU ARE THE WINNER!!!')
    $('#message').css('font-size', '32px')
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
  console.log('Could not track game play')
  console.log('error is ', error)
}
module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure,
  gameTrackingSuccess: gameTrackingSuccess,
  gameTrackingFailure: gameTrackingFailure
}
