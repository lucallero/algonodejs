'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test for groups of AB.', () => {
  it('Should return an integer', async () => {
    let result = test.main('ABABABBBAAA')
    result.should.be.an('Number')
  })

  it('Should return integer 3', async () => {
    let result = test.main('AAAA')
    result.should.equal(3)
  })

  it('Should return integer 4', async () => {
    let result = test.main('BBBBB')
    result.should.equal(4)
  })

  it('Should return integer 0', async () => {
    let result = test.main('ABABABAB')
    result.should.equal(0)
  })

  it('Should return integer 4', async () => {
    let result = test.main('AAABBB')
    result.should.equal(4)
  })
})
