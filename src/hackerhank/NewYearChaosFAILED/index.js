'use strict'

// Index [0, 1, 2, 3, 4, 5, 6, 7]

// Currt [1, 2, 5, 3, 7, 8, 6, 4]

// Sort  [1, 2, 3, 4, 5, 6, 7, 8]

function main (q) {
  let bribes = 0
  for (let i = 0; i < q.length; i++) {
    let current = q[i]
    let currentPosition = i
    let currentExpectedPosition = current - 1
    let currentBribe = 0
    let next = q[i + 1]
    let nextExpectedPosition = next - 1

    if (currentPosition < currentExpectedPosition) {
      currentBribe = currentExpectedPosition - currentPosition
    } else if (current > next) {
      currentBribe = current - nextExpectedPosition
    }
    if (currentBribe > 2) {
      let chaotic = 'Too chaotic'
      console.log(chaotic)
      return chaotic
    } else {
      bribes += currentBribe
    }
  }
  console.log(bribes)
  return bribes
}

module.exports = { main }
