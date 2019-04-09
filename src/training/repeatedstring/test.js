'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const strings = require('./strings')
chai.use(deepEqualInAnyOrder)

describe('Should count repeated occurrency on infinity strings.', () => {
  it('should return an integer', async () => {
    let result = strings.repeatedString('aba', 10)
    result.should.be.an('number')
    Number.isInteger(result).should.be.true
  })
  it('should return exactly 7 occurencies of a', async () => {
    let result = strings.repeatedString('aba', 10)
    result.should.be.equal(7)
  })

  it('should return exactly 1000000000000 occurencies of a', async () => {
    let result = strings.repeatedString('a', 1000000000000)
    result.should.be.equal(1000000000000)
  })
})
