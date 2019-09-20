'use strict'

// Sample Input
// 9 5
// 2 3 4 2 3 6 8 4 5
// Sample Output
// 2
function main (expenditures, d) {
  let medium = 0
  let notifications = 0
  let trailingDays = []

  let calcMedium = (array, d) => {
    array.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))
    if (d % 2 === 1) {
      return array[(array.length - 1) / 2]
    } else {
      return (array[(array.length / 2) - 1] + array[array.length / 2]) / 2
    }
  }

  for (let i = 0; i < expenditures.length; i++) {
    if (i >= d) {
      trailingDays = expenditures.slice(i - d, i)
      medium = calcMedium(trailingDays, d)
      if (expenditures[i] >= (2 * medium)) {
        ++notifications
      }
    }
  }

  return notifications
}

module.exports = { main }
