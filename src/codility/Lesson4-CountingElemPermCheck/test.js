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
  it('Should verify if is permutation', async () => {
    let A = [4, 3, 1]
    let result = test.main(A)
    expect(result).to.equal(0)
  })

  it('Should verify if is permutation', async () => {
    let A = [2, 3, 1, 4]
    let result = test.main(A)
    expect(result).to.equal(1)
  })

  it('Should verify if is permutation', async () => {
    let A = [2, 3, 1, 3]
    let result = test.main(A)
    expect(result).to.equal(0)
  })

  it('Should verify if is permutation', async () => {
    let A = [1]
    let result = test.main(A)
    expect(result).to.equal(1)
  })

  it('Should verify if is permutation', async () => {
    let A = [100000]
    let result = test.main(A)
    expect(result).to.equal(0)
  })

  it('Should verify if is permutation', async () => {
    let A = [2, 3]
    let result = test.main(A)
    expect(result).to.equal(0)
  })

  it('Should verify if is permutation', async () => {
    let A = [1, 2]
    let result = test.main(A)
    expect(result).to.equal(1)
  })
})
