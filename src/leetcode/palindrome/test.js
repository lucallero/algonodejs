'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
const LinkedList = require('../../../datastructures/linkedlist/index')
chai.use(deepEqualInAnyOrder)

describe('Should test for palindromes.', () => {
  it('Should return true for palindrome', async () => {
    let l1 = new LinkedList()
    l1.add(1)
    l1.add(2)
    l1.add(2)
    l1.add(1)
    let result = test.main(l1)
    result.should.equal(true)
  })

  it('Should return false for palindrome', async () => {
    let l1 = new LinkedList()
    l1.add(1)
    l1.add(2)
    let result = test.main(l1)
    result.should.equal(false)
  })
})
