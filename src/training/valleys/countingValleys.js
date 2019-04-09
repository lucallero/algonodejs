'use strict'

// Input
// 8 steps
// UDDDUDUUUDDDUDUU path
//
// _/\      _/\
//    \    /   \    /
//     \/\/     \/\/

// Output
// 2 valley

function countValleys (steps, path) {
  let valleys = 0
  let seaLevel = 0
  for (let step = seaLevel; step < steps; step++) {
    if (path.charAt(step) === 'D') {
      --seaLevel
      if (seaLevel === -1) {
        ++valleys
      }
    } else if (path.charAt(step === 'U')) {
      ++seaLevel
    }
  }
  return valleys
}

module.exports = {
  countValleys
}
