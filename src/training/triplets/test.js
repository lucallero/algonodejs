'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const compare = require('./compare')
chai.use(deepEqualInAnyOrder)

describe('Should test Triplets comparing code.', () => {
  it('should return an array', async () => {
    let result = compare.compareTriplets('1 2 3', '3 2 1')
    result.should.be.an('array')
  })
  it('should return an array equal to [1,1]', async () => {
    let result = compare.compareTriplets('1 2 3', '3 2 1')
    expect(result).to.deep.equalInAnyOrder([1, 1])
  })
  it('should return an array equal to [0,3]', async () => {
    let result = compare.compareTriplets('0 0 0', '1 1 1')
    expect(result).to.deep.equalInAnyOrder([0, 3])
  })
})
