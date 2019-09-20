'use strict'
function main (A, K) {
  if (A.length === 0) {
    return A
  }
  const shiftArray = (arr) => {
    let lastElement = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1]
    }
    arr[0] = lastElement
    return arr
  }

  while (K > 0) {
    A = shiftArray(A)
    K--
  }
  return (A)
}
module.exports = { main }
