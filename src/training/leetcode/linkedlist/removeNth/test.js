'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should compute arrays intersection.', () => {
  it('Should compute arrays intersection, returning [2,2]', async () => {
    console.time('Test: [2,2]')
    let result = test.main([1, 2, 2, 1], [2, 2])
    console.timeEnd('Test: [2,2]')
    result.should.deep.equalInAnyOrder([2, 2])
  })
})
