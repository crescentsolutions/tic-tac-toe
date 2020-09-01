'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

const gameStore = require('./../game-store.js')

const gameCreationSuccess = function (response) {
  gameStore.id = response.game._id
  $('#message').text('New game has started')
  $('#whos-turn').show()
  $('.start-game').hide()
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
  console.log('Move has been tracked')
  console.log('Working on WINNER function')
  const gameCells = response.game.cells
  console.log(gameCells.length)
  for (let i = 0; i <= gameCells.length; i++) {
    console.log('testing for loop on ui.js')
    if (gameCells[i] === 'X') {
      console.log(gameCells[i])
    }
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
