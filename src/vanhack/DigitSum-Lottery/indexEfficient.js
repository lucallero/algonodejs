
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

let computeCountingTable = () => {
  let countingTable = new Map()
  for (let i = 0; i < 100; i++) {
    countingTable.set(i, sumDigits(i))
  }
  return countingTable
}

let countingTable = new Map()

let countDigits = async (i, k) => {
  let sum = 0
  for (i; i <= k; i++) {
    sum = sumDigits(i)
    if (countingTable.has(sum)) {
      countingTable.set(sum, countingTable.get(sum) + 1)
    } else {
      countingTable.set(sum, 1)
    }
  }
}

let splitInterval = (i, k) => {
  let number = k - i
  if(number % 2 === 0)
}

function main (i, j) {

}

console.log(countingTable)

module.exports = { main, sumDigits }
