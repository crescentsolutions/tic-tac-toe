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

  const winningMessage = function () {
    $('#whos-turn').hide()
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

const gameHistorySuccess = function (response) {
  $('#game-history-message').text('You have played ' + response.games.length + ' games')
}

const gameHistoryFailure = function (error) {
  $('#message').text('Could not retrieve game history')
}

module.exports = {
  gameCreationSuccess: gameCreationSuccess,
  gameCreationFailure: gameCreationFailure,
  gameTrackingSuccess: gameTrackingSuccess,
  gameTrackingFailure: gameTrackingFailure,
  gameHistorySuccess: gameHistorySuccess,
  gameHistoryFailure: gameHistoryFailure
}
