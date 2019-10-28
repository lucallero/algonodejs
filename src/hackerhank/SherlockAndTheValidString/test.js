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
  it('Should solve the problem', async () => {
    let result = test.main('aabbccc')
    result.should.equal('YES')
  })

  it('Should solve the problem', async () => {
    let result = test.main('aabbcd BGHHBK')
    result.should.equal('YES')
  })

  it('Should solve the problem', async () => {
    let result = test.main('aaabbbcccdde')
    result.should.equal('NO')
  })

  it('Should solve the problem', async () => {
    let result = test.main('aaaabbcc')
    result.should.equal('NO')
  })
})
