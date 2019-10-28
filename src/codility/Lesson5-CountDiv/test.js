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
    let result = test.main(6, 11, 2)
    expect(result).to.equal(3)
  })

  it('Should solve the problem', async () => {
    let result = test.main(3, 3, 2)
    expect(result).to.equal(0)
  })

  it('Should solve the problem', async () => {
    let result = test.main(1, 5, 1)
    expect(result).to.equal(5)
  })

  it('Should solve the problem', async () => {
    let result = test.main(0, 5, 1)
    expect(result).to.equal(6)
  })

  it('Should solve the problem', async () => {
    let result = test.main(0, 2000000000, 1)
    expect(result).to.equal(2000000001)
  })
})
