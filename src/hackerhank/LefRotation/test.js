'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should print a staircase.', () => {
  it('Should return number 1', async () => {
    let result = test.main([1, 2, 3, 4, 5], 4)
    expect(result).to.have.ordered.members([5, 1, 2, 3, 4])
  })
})
