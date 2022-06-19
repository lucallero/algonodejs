'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test function.', () => {

  it('Should be false', async () => {
    test('cccc', 'c2ca').should.be.false
    test('a', '0').should.be.false
    test('substitution', 'substitutio').should.be.false
    // test('substitution', 's010n').should.be.false
    test('apple', 'a2e').should.be.false
    test('apple', 'a2l').should.be.false
  })

  it('Should be false', async () => {
    test('substitution', 's010n').should.be.false
  })

  it('Should be true', async () => {
    test('substitution', 'substitution').should.be.true
    test('substitution', 's10n').should.be.true
    test('substitution', 'sub4u4').should.be.true
    test('substitution', '12').should.be.true
    test('substitution', 'su3i1u2on').should.be.true
    test('internationalization', 'i12iz4n').should.be.true
    test('apple', 'a2le').should.be.true
  })

})
