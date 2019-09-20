'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test single-one finder.', () => {
  it('Should go through all items and return the lonely single 1', async () => {
    let result = test.main([1, 2, 2])
    result.should.equal(1)
  })
  it('Should go through all items and return the lonely single 1', async () => {
    let result = test.main([2, 2, 1])
    result.should.equal(1)
  })
  it('Should go through all items and return the lonely single 4', async () => {
    let result = test.main([4, 1, 2, 1, 2])
    result.should.equal(4)
  })
})
