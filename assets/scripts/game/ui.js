'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const gameStore = require('./../game-store.js')

const gameCreationSuccess = function (response) {
  gameStore.id = response.game._id
  $('#message').text('New game has started')
  console.log('A game has been created!')
}
const gameCreationFailure = function (error) {
  $('#message').text('Could not create new game')
  $('#message').css('background-color', '$alert')
  $('#message').css('padding', '2em 0')

  console.log('error is ', error)
  console.log('Could not create new game')
}
// const addGamePieceSuccess = function () {
//   $('#message').text('A game piece has been added')
//   console.log('A game piece has been added')
// }
// const addGamePieceFailures = function () {
//   $('#message').text('Could not add game piece')
//   console.log('Could not add game piece')
// }
// const gameTrackingSuccess = function (response) {
//   gameStore.id = response.game._id
//   $('#message').text('Move has been tracked')
//   console.log('Move has been tracked')
//   console.log(response.game.cells)
//   // console.log(response.game.cells.index)
// }
// const gameTrackingFailure = function (error) {
//   $('#message').text('Could not track game play')
//   console.log('Could not track game play')
//   console.log('error is ', error)
// }
module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure
  // addGamePieceSuccess: addGamePieceSuccess,
  // addGamePieceFailures: addGamePieceFailures,
  // gameTrackingSuccess: gameTrackingSuccess,
  // gameTrackingFailure: gameTrackingFailure
}
