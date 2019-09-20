'use strict'
function jumpingOnClouds (c) {
  let jumps = 0
  for (let i = 0; i < c.length - 1;) {
    if (c[i + 2] < 1) {
      i += 2
    } else {
      i += 1
    }
    ++jumps
  }
  return jumps
}

module.exports = { jumpingOnClouds }
