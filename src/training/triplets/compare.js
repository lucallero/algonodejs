'use strict'
function compareTriplets (a, b) {
  let scores = [0, 0]
  a = a.split(' ').map(item => parseInt(item))
  b = b.split(' ').map(item => parseInt(item))
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      ++scores[0]
    } else if (a[i] < b[i]) {
      ++scores[1]
    }
  }
  return scores
}
module.exports = {
  compareTriplets
}
