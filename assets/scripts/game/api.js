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
    },
    data: data
  })
}
const trackGame = function (position, player, status) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameStore.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: position,
          value: player
        },
        over: status
      }
    } // End of data
  })
}

const gameHistory = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newGame: newGame,
  trackGame: trackGame,
  gameHistory: gameHistory
}
