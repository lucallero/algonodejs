'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const merchant = require('./merchant')
chai.use(deepEqualInAnyOrder)

describe('Should test Socks pairing code.', () => {
  it('should return a number', async () => {
    let result = merchant.sockMerchant([1])
    result.should.be.a('number')
  })
  it('should return number 2 pairs of sockets', async () => {
    let result = merchant.sockMerchant([1, 1, 2, 2, 1, 2, 3])
    result.should.equal(2)
  })
})
