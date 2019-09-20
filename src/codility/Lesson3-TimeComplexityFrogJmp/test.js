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
  it('Should count jumps', async () => {
    let X = 10
    let Y = 85
    let D = 30
    let result = test.main(X, Y, D)
    expect(result).to.equal(3)
  })

  it('Should count jumps', async () => {
    let X = 1
    let Y = 10
    let D = 1
    let result = test.main(X, Y, D)
    expect(result).to.equal(9)
  })

  it('Should count jumps', async () => {
    let X = 1
    let Y = 1
    let D = 1
    let result = test.main(X, Y, D)
    expect(result).to.equal(9)
  })
})
