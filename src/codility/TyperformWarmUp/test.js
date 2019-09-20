'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Typeform WARMUP.', () => {
  it('Should test warm up ', async () => {
    let D = 4
    let S = 'two'
    let result = test.main(D, S)
    result.should.equal(8)
  })

  it('Should test warm up ', async () => {
    let D = 2
    let S = 'one'
    let result = test.main(D, S)
    result.should.equal(2)
  })
})
