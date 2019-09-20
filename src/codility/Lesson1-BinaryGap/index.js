'use strict'

function main (input) {
  let binaryString = input.toString(2)
  console.log('BinaryString:', binaryString)

  let binaryGaps = binaryString.match(/10+/g)
  console.log('BinaryGaps:', binaryGaps)

  if (binaryString.endsWith('0')) {
    binaryGaps = binaryGaps.slice(0, binaryGaps.length - 1)
  }

  if (binaryGaps === null || binaryGaps.length === 0) {
    return 0
  }

  let longestGap = binaryGaps.reduce(
    (accumulator, currentValue) => currentValue > accumulator ? currentValue : accumulator)

  console.log('LongestGap:', longestGap)
  console.log('LongestGapLength:', longestGap.length - 1)

  return longestGap.length - 1
}
module.exports = { main }
