/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (parseBigIntBinary(a) + parseBigIntBinary(b)).toString(2)
}

var parseBigIntBinary = (bin) => {
  let result = 0n
  let position = 0
  for (let i = bin.length - 1; i >= 0; i--) {
    result += BigInt(Math.pow(2, position++) * parseInt(bin.charAt(i)))
  }
  return result
}
