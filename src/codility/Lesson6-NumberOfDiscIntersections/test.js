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
  it('Should solve the problem', async () => {
    let A = [2, 3, 1]
    let result = test.main(A)
    expect(result).to.equal(3)
  })
  it('Should solve the problem', async () => {
    let A = [1, 5, 2, 1, 4, 0]
    let result = test.main(A)
    expect(result).to.equal(11)
  })
})
