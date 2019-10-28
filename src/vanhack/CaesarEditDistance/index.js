'use strict'
const encrypt = (string, shift) => {
  let a = 'a'.charCodeAt(0)
  return Array.from(string) // caeser cipher: (x+n) mod 26
    .map(char => String.fromCharCode((char.charCodeAt(0) - a + shift) % 26 + a))
    .join('')
}

const findCaesarEditDistance = (source, target) => {
  let editDistances = []
  for (let i = 0; i < 26; i++) {
    editDistances[i] = miminumEditDistance(encrypt(source, i), target)
  }
  return Math.min(...editDistances)
}
const miminumEditDistance = (source, target) => {
  let T = new Array(source.length + 1)
  for (let i = 0; i < source.length + 1; i++) {
    T[i] = new Array(target.length + 1)
  }
  for (let i = 0; i < source.length + 1; i++) {
    for (let j = 0; j < target.length + 1; j++) {
      if (i === 0 && j === 0) {
        T[i][j] = 0
      } else if (i === 0) {
        T[i][j] = T[i][j - 1] + 1
      } else if (j === 0) {
        T[i][j] = T[i - 1][j] + 1
      } else {
        if (source[i - 1] === target[j - 1]) {
          T[i][j] = T[i - 1][j - 1]
        } else {
          T[i][j] = Math.min(T[i][j - 1], T[i - 1][j]) + 1
        }
      }
    }
  }
  return T[source.length][target.length]
}

function main (source, target) {
  return findCaesarEditDistance(source, target)
}
module.exports = { main, encrypt, miminumEditDistance, findCaesarEditDistance }
