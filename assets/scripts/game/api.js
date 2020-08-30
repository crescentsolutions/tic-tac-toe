'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth

const config = require('./../config')
const store = require('../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: ''
  })
}
module.exports = {
  newGame: newGame
}
