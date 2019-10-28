'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test index.js', () => {
  it('Should test encrypt function', async () => {
    test.encrypt('abcd', 1).should.equal('bcde')
    test.encrypt('abcd', 10).should.equal('klmn')
    test.encrypt('abcd', 25).should.equal('zabc')
  })

  it('Should test miminumEditDistance function', async () => {
    test.miminumEditDistance('ab', 'abcd').should.equal(2)
  })
  it('Should test miminumEditDistance function', async () => {
    test.miminumEditDistance('aba', 'caa').should.equal(2)
  })
  it('Should test miminumEditDistance function', async () => {
    test.miminumEditDistance('adceg', 'abcfg').should.equal(4)
  })
  it('Should test miminumEditDistance function', async () => {
    test.miminumEditDistance('adceg', 'adceg').should.equal(0)
  })

  it('Should test findCaesarEditDistance function', async () => {
    test.findCaesarEditDistance('ab', 'ef').should.equal(0)
  })
  it('Should test findCaesarEditDistance function', async () => {
    test.findCaesarEditDistance('abc', 'ef').should.equal(1)
  })
  it('Should test findCaesarEditDistance function', async () => {
    test.findCaesarEditDistance('www', 'ssh').should.equal(2)
  })
  it('Should test findCaesarEditDistance function', async () => {
    test.findCaesarEditDistance('abc', 'gzu').should.equal(4)
  })
  it('Should test findCaesarEditDistance function', async () => {
    test.findCaesarEditDistance('abcdef', 'tuv').should.equal(3)
  })
})
