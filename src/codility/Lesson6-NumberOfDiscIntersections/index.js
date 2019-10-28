'use strict'
// index = [0, 1, 2, 3, 4, 5]
// let A = [1, 5, 2, 1, 4, 0]

// array index = center
// array value = radius

// diameter = 2 x radius

// if intersections > 10.000.000 return -1

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)

function main (A) {
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
  const MAX_INTERSECTIONS = 1000000
  let diameters = new Map()
  let intersections = 0

  for (let i = 0; i < A.length; i++) {
    diameters.set(i, range(i - A[i], i + A[i], 1))
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (intersections > MAX_INTERSECTIONS) {
        return -1
      }
      if (diameters.get(i)
        .some(element => {
          return diameters.get(j).indexOf(element) !== -1
        })) {
        intersections++
      }
    }
  }
  console.log(diameters)
  console.log('Intersections:', intersections)
  return intersections
}
module.exports = { main }
