'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const valleys = require('./countingValleys')
chai.use(deepEqualInAnyOrder)

describe('Should test CouttingValleys function.', () => {
  it('should return a number', async () => {
    let result = valleys.countValleys(1, 'D')
    result.should.be.an('number')
  })

  it('should return exactly 1 valley', async () => {
    let steps = 8
    let path = 'UDDDUDUU'
    let result = valleys.countValleys(steps, path)
    result.should.equal(1)
  })

  it('should return exactly 2 valley', async () => {
    let steps = 16
    let path = 'UDDDUDUUUDDDUDUU'
    let result = valleys.countValleys(steps, path)
    result.should.equal(2)
  })
})
