'use strict'
function main (A) {
  if (A.length === 0) {
    return 1
  }
  console.log('A_Array:', A)
  console.log('CraftedArray:', Array.from({ length: A.length + 1 }, (v, k) => k + 1))

  const A_sum = A.reduce((accumulator, currentValue) => accumulator + currentValue)
  const B_sum = Array.from({ length: A.length + 1 }, (v, k) => k + 1).reduce((accumulator, currentValue) => accumulator + currentValue)

  return B_sum - A_sum
}
module.exports = { main }
