var Mocha = require('mocha')
var mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)

/*

Print out all 8 digits palindromes number

00000000 < Not a palindrome
10000001 < First palindrome
99999999 < Last palindrome


1. Not using string manipulation

12344321 / 10 get the floor
12344321 % 10 it will be a digit,

Loop 8 time,

First 4 accumulate rights
Last 4 accumulate left

If left and righ are equal, print it out.

There will be an outter loop

*/


function isPalindrome(number, debug=false) {
  const digits = 8
  if (number < 10000001) return false


  let left = []
  let right = []

  for(let i=0; i<digits; i++){
    if(i < 4) {
      left.push(number % 10)
    } else {
      right.push(number % 10)
    }
    number = Math.floor(number / 10)
  }

  if(debug) {
    console.log('left:', left)
    console.log('left join:', left.join())
    console.log('right:', right)
  }

  let j=3
  for(let i=0; i<digits/2; i++){
    if(left[i] !== right[j]){
      return false
    }
    j--
  }

  return true
}

for(let i=10000001; i <=99999999; i++){
  if (isPalindrome(i))
    console.log(i)
}