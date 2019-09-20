'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should return 3 swaps.', () => {
  it('Should return 3', async () => {
    let result = test.main([4, 3, 1, 2])
    expect(result).to.equal(3)
  })
})

describe('Should return a sorted array.', () => {
  it('Should return 5 swaps', async () => {
    let result = test.main([2, 3, 4, 1, 5])
    expect(result).to.equal(3)
  })
})
describe('Should return a sorted array.', () => {
  it('Should return 3 swaps', async () => {
    let result = test.main([1, 3, 5, 2, 4, 6, 7])
    expect(result).to.equal(3)
  })
})

describe('Should return a sorted array.', () => {
  it('Should return 3 swaps', async () => {
    let result = test.main([2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19])
    expect(result).to.equal(46)
  })
})
