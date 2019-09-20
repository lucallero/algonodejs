'use strict'
function main (a) {
  let swaps = 0
  let n = a.length
  let temp = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        temp = a[j + 1]
        a[j + 1] = a[j]
        a[j] = temp
        ++swaps
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)

  return swaps
}

module.exports = { main }
