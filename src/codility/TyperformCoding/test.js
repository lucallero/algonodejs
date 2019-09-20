'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Typeform CODING', () => {
  it('Should return 1 ', async () => {
    let A = 3
    let B = 7
    let result = test.main(A, B)
    result.should.equal(3)
  })

  it('Should return 1 ', async () => {
    let A = 10
    let B = 6
    let result = test.main(A, B)
    result.should.equal(4)
  })

  it('Should return 1 ', async () => {
    let A = 0
    let B = 5
    let result = test.main(A, B)
    result.should.equal(0)
  })
  it('Should return 1 ', async () => {
    let A = 100000000
    let B = 5
    let result = test.main(A, B)
    result.should.equal(13)
  })
  it('Should return 1 ', async () => {
    let A = 100000000
    let B = 100000000
    let result = test.main(A, B)
    result.should.equal(20)
  })
})
