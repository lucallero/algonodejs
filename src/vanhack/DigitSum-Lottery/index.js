let sumInterval = (i, k) => {
  let sumsCounting = new Map()
  let sum = 0
  let variants = 0
  let maxPeople = 1
  for (;i <= k; i++) {
    sum = sumRecursive(i)
    if (!sumsCounting.has(sum)) {
      sumsCounting.set(sum, 1)
    } else {
      sumsCounting.set(sum, sumsCounting.get(sum) + 1)
      if (sumsCounting.get(sum) > maxPeople) {
        variants = 0
        maxPeople = sumsCounting.get(sum)
      }
    }
    if (sumsCounting.get(sum) === maxPeople) {
      variants++
    }
  }
  return [variants, maxPeople]
}

let sumDigits = (number) => {
  let sum = 0
  for (const digit of number.toString()) {
    sum += Number.parseInt(digit)
  }
  return sum
}

let sumRecursive = (number) => {
  let divisor = Number.parseInt('1'.padEnd(number.toString().length, '0'))
  if (number !== 0) {
    let digit = Math.floor(number / divisor)
    let rest = number % divisor
    return (digit + sumRecursive(rest))
  }
  return 0
}

// let selectResultWithTheMostWinners = (sumsCountingMap) => {
//   let theMostWinner = Math.max(...Array.from(sumsCountingMap.values()))
//   let possibleSolutions = Array.from(sumsCountingMap.values()).filter(value => value === theMostWinner)
//   return [possibleSolutions.length, theMostWinner]
// }

function main (i, j) {
  return sumInterval(i, j)
}

module.exports = { main, sumDigits }
