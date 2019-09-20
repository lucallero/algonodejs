'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test bubble sort swaps.', () => {
  it('Should return an integer', async () => {
    let result = test.main([6, 4, 1])
    result.should.be.a('Number')
  })

  it('Should return zero swaps', async () => {
    let result = test.main([6, 4, 1])
    result.should.equal(3)
  })

  it('Should return zero swaps', async () => {
    let result = test.main([1, 2, 3])
    result.should.equal(0)
  })
})
