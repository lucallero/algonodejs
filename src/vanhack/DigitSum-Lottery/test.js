'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

const measure = (label, start) => {
  (start) ? console.time(label) : console.timeEnd(label)
}

describe('Should test single-one finder.', () => {
  it('Should test sumDigits function', async () => {
    let result = test.sumDigits(123)
    expect(result).to.eql(6)
  })

  it('Should test main function', async () => {
    let result = test.main(1, 5)
    expect(result).to.eql([5, 1])
  })

  it('Should test main function', async () => {
    let result = test.main(3, 12)
    expect(result).to.eql([1, 2])
  })

  it('Should test main function', async () => {
    let result = test.main(1, 10)
    expect(result).to.eql([1, 2])
  })
})
