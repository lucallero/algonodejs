'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('|  TESTING  |', () => {
  it('Should test main function with result 7', async () => {
    let result = test.main(4, [1, 2], [3, 4])
    expect(result).to.equal(7)
  })

  it.only('Should test main function with result 11', async () => {
    let result = test.main(5, [1, 2], [3, 5])
    expect(result).to.equal(11)
  })

  it('Should test main function with result 18', async () => {
    let result = test.main(8, [2, 3, 4, 3], [8, 5, 6, 4])
    result.should.equal(18)
  })

  it('Should test main function with result 1', async () => {
    let result = test.main(1, [], [])
    result.should.equal(1)
  })

  it('Should test main function with result 2', async () => {
    let result = test.main(2, [1], [2])
    result.should.equal(2)
  })
})
