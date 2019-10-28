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
    let A = [-3, 1, 2, -2, 5, 6]
    let result = test.main(A)
    expect(result).to.equal(60)
  })
})
