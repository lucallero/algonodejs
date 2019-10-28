'use strict'
function main (s) {
  if (s.length < 1 || s.length > 10 ** 5) {
    return 'NO'
  }
  let occurrencies = new Map()
  let occurrCount = new Map()
  let ssorted = Array.from(s).sort()
  for (let i = 0; i < ssorted.length; i++) {
    if (!occurrencies.has(ssorted[i])) {
      occurrencies.set(ssorted[i], 1)
    } else {
      occurrencies.set(ssorted[i], occurrencies.get(ssorted[i]) + 1)
    }
  }
  for (const value of occurrencies.values()) {
    if (!occurrCount.has(value)) {
      occurrCount.set(value, 1)
    } else {
      occurrCount.set(value, occurrCount.get(value) + 1)
    }
  }
  if (occurrCount.size > 2) {
    return 'NO'
  }
  let mostCommon = Array.from(occurrCount.values())
    .sort((a, b) => a - b)
    .reduce((accum, element) => (element > accum ? element : accum))

  for (const freq of occurrCount.keys()) {
    if (occurrCount.get(freq) !== mostCommon && freq - 1 !== mostCommon) {
      return 'NO'
    }
  }
  return 'YES'
}
module.exports = { main }
