/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// https://leetcode.com/problems/roman-to-integer/

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)

// Some rules
// * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
// * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
// * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900

// Basic idea

// Loop over all elementes with a pointer 'i'
// Check current elemente togheter with next elemente is a exception (a subtraction)
// If not, get the value from the map and sum,
// Otherwise resolve the exception by subtracting current from next
// After that add the exception result to the main sum
// And jump to other roman (skip the two elements)
// Return the main sum in the end

const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}

const exceptions = new Set(['IV', 'IX', 'XL', 'XC', 'CD', 'CM'])
console.log(exceptions)

var romanToInt = function (s) {
  if (!s.length) return 0
  let mainSum = 0
  let current = ''
  for (let i = 0; i < s.length; i++) {
    current = s.charAt(i)
    if (exceptions.has(s.substring(i, i + 2))) {
      current = s.substring(i, i + 2)
      i++
    }
    mainSum += romans[current]
  }
  return mainSum
}

describe('| TESTS |', () => {
  it('Given Input: "" should Output: 0', () => {
    expect(romanToInt('')).to.equal(0)
  })

  it('Given Input: "III" should Output: 3', () => {
    expect(romanToInt('III')).to.equal(3)
  })

  it('Given Input: "MCMXCIV" should Output: 1994', () => {
    expect(romanToInt('MCMXCIV')).to.equal(1994)
  })
})

mocha.run()
