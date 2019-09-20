'use strict'
function main (A) {
  let ocurrenciesMap = new Map()
  for (const element of A) {
    if (ocurrenciesMap.has(element)) {
      ocurrenciesMap.set(element, ocurrenciesMap.get(element) + 1)
    } else {
      ocurrenciesMap.set(element, 1)
    }
  }
  const isOdd = (element) => element % 2 !== 0
  return Array.from(ocurrenciesMap.keys()).find(element => isOdd(ocurrenciesMap.get(element)))
}
module.exports = { main }
