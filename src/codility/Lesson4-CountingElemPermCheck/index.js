'use strict'
function main (A) {
  if (A.length <= 0 || A.length > 100000) {
    return 0
  }

  A.sort((a, b) => a - b)

  if (A[0] !== 1) {
    return 0
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 1 || A[i] > 100000) {
      return 0
    }
    if ((A[i + 1] - A[i]) > 1 || A[i + 1] - A[i] === 0) {
      return 0
    }
  }
  return 1
}
module.exports = { main }
