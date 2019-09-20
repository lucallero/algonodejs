'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should calculate the asolute difference between the sum of a matrix diagonals.', () => {
  // For example, the square matrix  is shown below:
  // 1 2 3
  // 4 5 6
  // 9 8 9
  // The left-to-right diagonal = 1+5+9=15
  // The right to left diagonal = 3+5+9=17
  // Their absolute difference is = 15-17=2

  it('Should return number 2', async () => {
    let result = test.main([[1, 2, 3], [4, 5, 6], [9, 8, 9]])
    result.should.be.equal(2)
  })

  it('Should return number 2', async () => {
    let result = test.main([[1, 2, 3], [4, 5, 6], [9, 8, 9]])
    result.should.be.equal(2)
  })
})
