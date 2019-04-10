'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const rduplicates = require('./rduplicator')
chai.use(deepEqualInAnyOrder)

describe('Should test remove duplicates  function.', () => {
  it('should return a number', async () => {
    let result = rduplicates.removeDuplicates([0, 0, 1, 1])
    result.should.be.an('Array')
  })

  it('should return an array with no duplicates items equal to [0, 1, 2, 3, 4]', async () => {
    let result = rduplicates.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    result.should.deep.equalInAnyOrder([0, 1, 2, 3, 4])
  })

  it('should return an array with no duplicates items equal to [1, 2]', async () => {
    let result = rduplicates.removeDuplicates([1, 1, 2])
    result.should.deep.equalInAnyOrder([1, 2])
  })
})
