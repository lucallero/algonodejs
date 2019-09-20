'use strict'

// Input
// 4 3 1 2
// Expected outputd
// 3

// Index 0 1 2 3

// Input 4 3 1 2
// Sort  1 2 3 4

// 4 3 1 2
// 1 3 4 2
// 1 2 4 3
// 1 2 3 4

function main (arr) {
  // let buffer = 0
  // let swaps = 0
  // let sorted = Array.from(arr).sort()
  // console.log('Input:', arr)
  // console.log('Sorted:', sorted)

  // for (let i = 0; i < sorted.length - 1; i++) {
  //   let expectedPosition = i
  //   let currenNumber = sorted[i]
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] === currenNumber && j !== expectedPosition) {
  //       buffer = arr[expectedPosition]
  //       arr[expectedPosition] = currenNumber
  //       arr[j] = buffer
  //       swaps++
  //     }
  //   }
  // }
  // console.log('Output:', arr)
  // return swaps

  2 3 4 5
  

  let minValue = Math.min(...arr)
  let finalPosition = 0
  let buffer = 0
  let numberSwaps = 0
  let i = 0

  // Process every value in the array.
  while (i < arr.length) {
    // Calculate the final finalPosition of each value.
    finalPosition = arr[i] - minValue
    // Check wether the value is in its correct finalPosition. If not, throw (swap) it to its rigthfull position.
    if (finalPosition !== i) {
      buffer = arr[i]
      arr[i] = arr[finalPosition]
      arr[finalPosition] = buffer
      numberSwaps++
    } else {
      // If the value is already in its final position, go to the next value.
      i++
    }
  }
  return numberSwaps
}
module.exports = { main }
