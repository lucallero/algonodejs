'use strict'
// Consider a staircase of size n=4:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n,
// and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .

function main (n) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(' '.repeat(i).padEnd(n, '#'))
  }
  return ''
}
module.exports = { main }
