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
  it('Should compute arrays intersection, returning [4,9]', async () => {
    let result = test.main([4, 9, 5], [9, 4, 9, 8, 4])
    result.should.deep.equalInAnyOrder([4, 9])
  })

  it('Should compute arrays intersection, returning [1]', async () => {
    let result = test.main([1, 2], [1, 1])
    result.should.deep.equalInAnyOrder([1])
  })

  it('Should compute arrays intersection, returning [1]', async () => {
    let result = test.main([2, 1], [1, 1])
    result.should.deep.equalInAnyOrder([1])
  })

  it('Should compute arrays intersection, returning [1]', async () => {
    let result = test.main([3, 1, 2], [1, 1])
    result.should.deep.equalInAnyOrder([1])
  })

  it('Should compute arrays intersection, returning [1, 2]', async () => {
    let result = test.main([2, 1], [1, 2])
    result.should.deep.equalInAnyOrder([1, 2])
  })

  it('Should compute arrays intersection, returning [2]', async () => {
    let result = test.main([1, 2, 2, 1], [2])
    result.should.deep.equalInAnyOrder([2])
  })

  let output = [5, 4, 57, 79, 7, 89, 88, 45, 34, 92, 38, 85, 6, 0, 77, 44, 61]
  it(`Should compute arrays intersection, returning [${output}]`, async () => {
    let input1 = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81]
    let input2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]
    let result = test.main(input1, input2)
    result.should.deep.equalInAnyOrder(output)
  })
})
