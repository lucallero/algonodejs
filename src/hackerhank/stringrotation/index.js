'use strict'
function main (a, d) {
  while (d > 0) {
    let tempVal = a[0]
    for (let i = 0; i < a.length; i++) {
      a[i] = a[i + 1]
    }
    a[a.length - 1] = tempVal
    d--
  }
  return a
}
module.exports = { main }
