'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Run a test.', () => {
  it('Should solve the problem', async () => {
    let A = [4, 2, 2, 5, 1, 5, 8]
    let result = test.main(A)
    expect(result).to.equal(1)
  })

  it('Should solve the problem', async () => {
    let A = [4, 2, 2, 5, 1, 5, 8]
    let result = test.calcSliceAverage(A.slice(1, 2))
    expect(result).to.equal(2)
  })

  it('Should solve the problem', async () => {
    let A = [4, 2, 2, 5, 1, 5, 8, 1, 0]
    let result = test.main(A)
    expect(result).to.equal(7)
  })

  it('Should solve the problem', async () => {
    let A = [4, 3, 3, 5, 1, 5, 8, 1, 3, 1]
    let result = test.main(A)
    expect(result).to.equal(7)
  })

  it('Should solve the problem', async () => {
    let A = [-3, -5, -8, -4, -10]
    let result = test.main(A)
    expect(result).to.equal(2)
  })
})
