'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe.only('Typeform ALGORITHMIC.', () => {
  it('Should return 7 ', async () => {
    let S = 'baaabbabbb'
    let result = test.main(S)
    result.should.equal(7)
  })
})
