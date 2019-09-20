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
  it('Should find missing element', async () => {
    let A = []
    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
    let result = test.main(A)
    expect(result).to.equal(4)
  })

  it('Should find missing element', async () => {
    let A = []
    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 4
    let result = test.main(A)
    expect(result).to.equal(5)
  })

  it('Should find missing element', async () => {
    let A = []
    A[0] = 1
    let result = test.main(A)
    expect(result).to.equal(2)
  })
})
