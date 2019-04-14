'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test for palindromes.', () => {
  it('Should return true an array', async () => {
    let result = test.main([1, 2])
    result.should.be.an('Array')
  })

  it('Should return true an array equals [5 1 2 3 4]', async () => {
    let result = test.main([1, 2, 3, 4, 5], 4)

    result.should.deep.equalInAnyOrder([5, 1, 2, 3, 4])
  })

  it('Should return true an array equals [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97]', async () => {
    let result = test.main([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)

    result.should.deep.equalInAnyOrder([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97])
  })
})
