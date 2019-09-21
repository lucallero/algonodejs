'use strict'

let calcSliceAverage = (slice, p, q) => {
  return slice.reduce((accumulator, value) => accumulator + value) / slice.length
}

function main (A) {
  let minAverage = Number.MAX_SAFE_INTEGER
  let minIndex = 0
  for (let i = 0; i <= A.length - 2; i++) {
    let sliceAverage = calcSliceAverage(A.slice(i, i + 2))
    if (sliceAverage < minAverage) {
      minAverage = sliceAverage
      minIndex = i
    }

    if (i < A.length - 2) {
      sliceAverage = calcSliceAverage(A.slice(i, i + 3))
      if (sliceAverage < minAverage) {
        minAverage = sliceAverage
        minIndex = i
      }
    }
  }
  return minIndex
}
module.exports = { main, calcSliceAverage }
