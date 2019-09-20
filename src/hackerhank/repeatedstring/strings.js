'use strict'

// Sample Input 0
// aba
// 10
// Sample Output 0
// 7, number of occurrency of 'a'

function repeatedString (s, n) {
  const countA = (s) => s.split('')
    .filter(c => c === 'a')
    .length
  let len = s.length
  let reps = Math.floor(n / len)
  let remainder = s.slice(0, n % len)
  return reps * countA(s) + countA(remainder)
}
module.exports = { repeatedString }
