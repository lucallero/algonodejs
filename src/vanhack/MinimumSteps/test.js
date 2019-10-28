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
  it('Should test main function', async () => {
    let result = test.main([ 'x/', 'y/', '../', 'z/', './' ])
    result.should.equal(2)
  })
})
