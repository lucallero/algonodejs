'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Finding the most occuring number in an Array.', () => {
  it('Should return an integer', async () => {
    let result = test.main('ABABABBBAAA')
    result.should.be.an('Number')
  })
})
