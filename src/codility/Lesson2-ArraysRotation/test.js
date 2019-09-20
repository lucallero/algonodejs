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
  it('Should rotate the array', async () => {
    let A = [3, 8, 9, 7, 6]
    let K = 3
    let result = test.main(A, K)
    expect(result).to.deep.equal([9, 7, 6, 3, 8])
  })

  it('Should rotate the array', async () => {
    let A = []
    let K = 3
    let result = test.main(A, K)
    expect(result).to.equal(A)
  })
})
