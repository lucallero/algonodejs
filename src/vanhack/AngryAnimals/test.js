'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
chai.use(deepEqualInAnyOrder)

describe('TEST TEST TEST ', () => {
  it('Should verify that enemies map has empty sets', async () => {
    let N = 4; let a = []; let b = []
    let result = test.indexEnemies(N, a, b)
    for (const set of result.values()) {
      expect(set.size).to.equal(0)
    }
  })
  it('Should verify that enemies map starts at 1 and not at zero', async () => {
    let N = 4; let a = []; let b = []
    let result = test.indexEnemies(N, a, b)
    expect(result.get(0)).to.be.undefined
  })
  it('Enemies map size should equal N "n=4"', async () => {
    let N = 4; let a = [1, 2]; let b = [3, 4]
    let result = test.indexEnemies(N, a, b)
    expect(result.size).to.equal(N)
  })
  it('Group enemies set should contain enemies of 1 and 2', async () => {
    let N = 4; let a = [1, 2]; let b = [3, 4]
    let eMap = test.indexEnemies(N, a, b)
    let gEnemies = new Set()
    test.findJEnemies(1, eMap, gEnemies)
    test.findJEnemies(2, eMap, gEnemies)
    expect(gEnemies.has(3)).to.be.true
    expect(gEnemies.has(4)).to.be.true
  })
  it('Should test main function', async () => {
    let result = test.main(4, [1, 2], [3, 4])
    expect(result).to.equal(7)
  })

  it('Should test main function', async () => {
    let result = test.main(5, [1, 2], [3, 5])
    expect(result).to.equal(11)
  })

  it('Should test main function', async () => {
    let result = test.main(8, [2, 3, 4, 3], [8, 5, 6, 4])
    result.should.equal(18)
  })

  it('Should test main function', async () => {
    let result = test.main(1, [], [])
    result.should.equal(1)
  })

  it('Should test main function', async () => {
    let result = test.main(2, [1], [2])
    result.should.equal(2)
  })
})
