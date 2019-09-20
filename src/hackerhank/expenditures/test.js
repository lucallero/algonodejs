'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test expeditures  notifications.', () => {
  it('Should return an integer', async () => {
    let result = test.main([6, 4, 1], 5)
    result.should.be.a('Number')
  })

  it.only('Should return an 2 notifications', async () => {
    let result = test.main([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
    result.should.equal(2)
  })

  it.only('Should return an 2 notifications', async () => {
    let result = test.main([2, 3, 4, 2, 3, 6, 8, 4, 5], 4)
    result.should.equal(4)
  })
})
