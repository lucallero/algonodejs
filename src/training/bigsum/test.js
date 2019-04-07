'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const sum = require('./sum')
chai.use(deepEqualInAnyOrder)

describe('Should test BigSum code.', () => {
  it('should return a number', async () => {
    let result = sum.aVeryBigSum([1])
    result.should.be.a('number')
  })

  it('should return number 30', async () => {
    let result = sum.aVeryBigSum([10, 10, 10])
    result.should.equal(30)
  })

  it('should return number 5000000015', async () => {
    let result = sum.aVeryBigSum([100000000001, 100000000002, 100000000003, 100000000004, 100000000005])
    result.should.equal(500000000015)
  })
})
