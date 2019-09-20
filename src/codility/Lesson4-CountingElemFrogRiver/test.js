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
  it('Should verify if is permutation', async () => {
    let X = 5
    let A = []
    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
    let result = test.main(A, X)
    expect(result).to.equal(6)
  })

  it('Should verify if is permutation', async () => {
    let X = 5
    let A = []
    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 5
    A[5] = 3
    A[6] = 2
    A[7] = 4
    let result = test.main(A, X)
    expect(result).to.equal(6)
  })
})
