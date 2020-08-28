'use strict'

// Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
// Source: https://api.jquery.com/css/
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Event/target

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  // .target references the object that
  // the event occurred on
  const form = event.target

  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePw = function () {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  api.changePw(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onGameBoard = function () {
  $('#game-board').css('background-color', 'red')
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePw: onChangePw,
  onGameBoard: onGameBoard
}
