'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const config = require('./../config')
const store = require('../store')
const gameStore = require('./../game-store.js')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
// const newGamePiece = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games' + gameStore.id,
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//       // Authorization: 'Bearer ' + store.user.token
//     },
//     data: data
//   })
// }
const trackGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameStore.id,
    // gameStore.games.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data,
          value: 'X'
        },
        over: gameStore.over
      }
    } // End of data
  })
}

module.exports = {
  newGame: newGame,
  // newGamePiece: newGamePiece,
  trackGame: trackGame
}
