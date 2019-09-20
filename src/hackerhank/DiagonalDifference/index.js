'use strict'
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1+5+9=15
// The right to left diagonal = 3+5+9=17
// Their absolute difference is = 15-17=2
function main (arr) {
  let lefDiagonal = 0
  let rightDiagonal = 0

  for (let line = 0; line < arr.length; line++) {
    console.log('currentLine:', arr[line])
    lefDiagonal += arr[line][line]
    console.log('current leftDiagonal:', lefDiagonal)

    rightDiagonal += arr[line][arr.length - 1 - line]
    console.log('current rightDiagonal:', rightDiagonal)
  }
  return Math.abs(lefDiagonal - rightDiagonal)
}
module.exports = { main }
