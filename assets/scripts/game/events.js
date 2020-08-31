'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const getGameData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const newGameEvent = function (event) {
  event.preventDefault()
  const submitNewGame = event.target
  const data = getGameData(submitNewGame)
  api.newGame(data)
    .then(ui.gameCreationSuccess)
    .catch(ui.gameCreationFailure)
}
const selectGameSquare = function (event) {
  // const targetSquare = event.target
  console.log('This is my target on events.js')
  console.log(event.target)
  let choice = 'X'
  $(event.target).text(choice)
  // let turn = ''
  // if (event) {
  //   turn = !event
  //   turn = !turn
  //   console.log('Here is if value')
  //   console.log(turn)
  //   $(event.target).text(choice)
  // } else {
  //   console.log('Here is else value')
  //   console.log(turn)
  //   $(event.target).text(choice)
  // }
}
//
// const newAddGamePiece = function (event) {
//   event.preventDefault()
//   const gamePiece = event.target
//   const data = getGameData(gamePiece)
//   api.newGamePiece(data)
//     .then(ui.addGamePieceSuccess)
//     .catch(ui.addGamePieceFailure)
// }
//
const newTrackGamePiece = function (event) {
  event.preventDefault()
  const selectedSquare = event.target
  console.log('Here is the selectedSquare: ')
  console.log(selectedSquare)
  console.log('what is cell index')
  console.log(selectedSquare.dataset.cellIndex)
  api.trackGame(selectedSquare.dataset.cellIndex)
    // .then(ui.gameTrackingSuccess)
    // .catch(ui.gameTrackingFailure)
}

module.exports = {
  newGameEvent: newGameEvent,
  selectGameSquare: selectGameSquare,
  // newAddGamePiece: newAddGamePiece,
  newTrackGamePiece: newTrackGamePiece
}
