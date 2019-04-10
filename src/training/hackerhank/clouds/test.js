'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const jump = require('./jumpingclouds')
chai.use(deepEqualInAnyOrder)

describe('Should avoid thunders.', () => {
  it('should return a number', async () => {
    let result = jump.jumpingOnClouds([0])
    result.should.be.a('number')
  })

  it('should return 4 jumps', async () => {
    let result = jump.jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
    result.should.be.equal(4)
  })

  it('should return 3 jumps', async () => {
    let result = jump.jumpingOnClouds([0, 0, 0, 0, 1, 0])
    result.should.be.equal(3)
  })
})
