'use strict'

function main (A, B) {
  if (A === 0 || B === 0) return 0
  return (A * B).toString(2).match(/1/g).length
}
module.exports = { main }
