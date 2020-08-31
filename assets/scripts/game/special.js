'use strict'

const findGameSquare = function (target) {
  const targetSquare = target.target
  return targetSquare
}
const role = function () {
  $('#role').html('<h1>X</h1>')
}
role()

const addX = $(findGameSquare.id).text('X')

// let x = true
// if (let turn = 0; turn <= 9; turn++) {
//   console.log('The role is currently ' + x)
//   console.log('Turn is currently ' + turn)
//   x = !x
//   console.log('The role is currently ' + x)
// }

module.exports = {
  findGameSquare: findGameSquare,
  addX: addX
}
