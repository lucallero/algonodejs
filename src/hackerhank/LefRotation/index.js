'use strict'

let lefRotate = (arr) => {
  arr.push(arr.shift())
  return arr
}

function main (a, d) {
  for (let i = 0; i < d; i++) {
    a = lefRotate(a)
    console.log('Rotated:', a)
  }
  return a
}
module.exports = { main }
