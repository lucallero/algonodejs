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
  it('Should return 7 ', async () => {
    let A = []
    A[0] = 9
    A[1] = 3
    A[2] = 9
    A[3] = 3
    A[4] = 9
    A[5] = 7
    A[6] = 9
    let result = test.main(A)
    result.should.equal(7)
  })
})
