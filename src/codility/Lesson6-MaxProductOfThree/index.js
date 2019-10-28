'use strict'
function main (A) {
  A.sort((a, b) => b - a)
  console.log(A)
  return A[0] * A[1] * A[2]
}
module.exports = { main }
