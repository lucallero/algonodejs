'use strict'
/* eslint-disable no-undef */
const chai = require('chai')
const should = require('chai').should()
const compare = require('./compare')

describe('Should test Triplets comparing code.', () => {
  it('should return an array', async () => {
    let result = compare.compareTriplets('1 2 3', '3 2 1')
    result.should.be.an('array')
  })
})
