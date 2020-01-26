'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const trader = require('./trader')
chai.use(deepEqualInAnyOrder)

describe('Should test trader maxProfit  function.', () => {
  it('should return a number', async () => {
    console.time('maxProfit')
    let result = trader.maxProfit([0, 1])
    console.timeEnd('maxProfit')
    result.should.be.an('Number')
  })

  it('should return max profit = 4', async () => {
    console.time('maxProfit')
    let result = trader.maxProfit([1, 2, 3, 4, 5])
    console.timeEnd('maxProfit')
    result.should.be.equal(4)
  })

  it('should return max profit = 7', async () => {
    console.time('maxProfit')
    let result = trader.maxProfit([7, 1, 5, 3, 6, 4])
    console.timeEnd('maxProfit')
    result.should.be.equal(7)
  })
})
