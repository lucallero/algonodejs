'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should count bribes.', () => {
  it('Should return 3', async () => {
    let result = test.main([2, 1, 5, 3, 4])
    result.should.be.equal(3)
  })

  it('Should return Too chaotic', async () => {
    let result = test.main([2, 5, 1, 3, 4])
    result.should.be.equal('Too chaotic')
  })

  it('Should return 7', async () => {
    let result = test.main([1, 2, 5, 3, 7, 8, 6, 4])
    result.should.be.equal(7)
  })
})
