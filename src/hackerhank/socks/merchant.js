'use strict'

function sockMerchant (ar) {
  let result = 0
  while (ar.length > 1) {
    let aSock = ar.shift()
    for (let i = 0; i < ar.length; i++) {
      if (aSock === ar[i]) {
        ++result
        ar.splice(i, 1)
        break
      }
    }
  }
  return result
}

module.exports = { sockMerchant }
