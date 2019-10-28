'use strict'

function main (A, B, K) {
  if (A % K === 0 || B % K === 0) {
    return Math.floor((B - A) / K) + 1
  } else {
    let D = Math.ceil(A / K) * K
    return Math.floor((B - D) / K) + 1
  }
}
module.exports = { main }
