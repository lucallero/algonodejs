'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const test = require('./index')
var bst = require('tiny-bst')
chai.use(deepEqualInAnyOrder)

describe('Should test for BinaryTree depth.', () => {
  it('Should return depth = 2', async () => {
    var t1 = bst()
    t1.insert(1)
    t1.insert(3)
    t1.insert(24)
    t1.insert(27)
    t1.insert(28)    
    let result = test.main(t1.root)
    console.log('Depth:', result)
  })
})
