'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const rotator = require('./rotator')
chai.use(deepEqualInAnyOrder)

describe('Should test remove duplicates  function.', () => {
    it('should return an Array equals [5,6,7,1,2,3,4]', async () => {
        let result = rotator.rotate([1, 2, 3, 4, 5, 6, 7], 3)
        result.should.deep.equalInAnyOrder([5, 6, 7, 1, 2, 3, 4])
    })
    it('should return an Array equals [7,1,2,3,4,5,6]', async () => {
        let result = rotator.rotate([1, 2, 3, 4, 5, 6, 7], 1)
        result.should.deep.equalInAnyOrder([7, 1, 2, 3, 4, 5, 6])
    })

    it('should return an Array equals [3, 99, -1, -100]', async () => {
        let result = rotator.rotate([-1, -100, 3, 99], 2)
        result.should.deep.equalInAnyOrder([3, 99, -1, -100])
    })
})
