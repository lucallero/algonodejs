'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Run a test.', () => {
  it('Should return 1 ', async () => {
    let input = 20
    let result = test.main(input)
    result.should.equal(1)
  })

  it('Should return 0 ', async () => {
    let input = 32
    let result = test.main(input)
    result.should.equal(0)
  })

  it('Should return 4 ', async () => {
    let input = 529
    let result = test.main(input)
    result.should.equal(4)
  })

  it('Should return 0 ', async () => {
    let input = 15
    let result = test.main(input)
    result.should.equal(0)
  })
})
