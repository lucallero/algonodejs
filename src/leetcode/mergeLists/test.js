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

describe('Should merge linkedLists.', () => {
  it('Should merge l1 and l2', async () => {
    // Input: 1->2->4, 1->3->4
    // Output: 1->1->2->3->4->4

    let l1 = new LinkedList()
    l1.add(1)
    l1.add(2)
    l1.add(4)
    let l2 = new LinkedList()
    l2.add(1)
    l2.add(3)
    l2.add(4)

    // console.time('Test: [2,2]')
    let result = test.main(l1, l2)

    l1.findAll().forEach(node => console.log(node.data))
  })

  it('Should merge l1 and l2 for [1][]', async () => {
    let l1 = new LinkedList()
    l1.add(1)
    let l2 = new LinkedList()
    let result = test.main(l1, l2)
    l1.findAll().forEach(node => console.log(node.data))
  })

  it('Should merge l1 and l2 for [2][1]', async () => {
    let l1 = new LinkedList()
    l1.add(2)
    let l2 = new LinkedList()
    l2.add(1)
    let result = test.main(l1, l2)
    l1.findAll().forEach(node => console.log(node.data))
  })

  it('Should merge l1 and l2 for [-10, -10, -9, -4, 1, 6, 6][-7]', async () => {
    let l1 = new LinkedList()
    l1.add(-10)
    l1.add(-10)
    l1.add(-9)
    l1.add(-4)
    l1.add(1)
    l1.add(6)
    l1.add(6)
    let l2 = new LinkedList()
    l2.add(-7)
    let result = test.main(l1, l2)

    l1.findAll().forEach(node => console.log(node.data))
  })
})
