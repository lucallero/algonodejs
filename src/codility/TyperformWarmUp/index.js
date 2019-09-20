'use strict'

function main (D, S) {
  let literalNumbers = new Map()
    .set('one', 1)
    .set('two', 2)
    .set('three', 3)
    .set('four', 4)
    .set('five', 5)
  return D * literalNumbers.get(S)
}
module.exports = { main }
