'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const expect = require('chai').expect
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const LinkedList = require('./index')
chai.use(deepEqualInAnyOrder)

describe('Should test LinkedList operations.', () => {
  let aLinkedList = new LinkedList()
  aLinkedList.add('Cat')
  aLinkedList.add('Dog')
  aLinkedList.add('Rat')
  aLinkedList.add('Lion')

  it('Should insert many items and find one', async () => {
    let result = aLinkedList.find('Rat')
    result.data.should.equal('Rat')
  })

  it('Should test remove operation', async () => {
    let result = aLinkedList.remove('Dog')
    result.data.should.equal('Dog')

    let head = aLinkedList.getHead()
    head.data.should.equal('Cat')
    head.next.data.should.equal('Rat')
  })

  it('Should print all item from the LinkedList', () => {
    aLinkedList.findAll().forEach(element => {
      console.log(element)
    })
  })

  it.only('Should remove node 5 from LinkedList  [4, 5, 1, 9] remaining [4,1,9] ', () => {
    let aLinkedList = new LinkedList()
    aLinkedList.add(4)
    aLinkedList.add(5)
    aLinkedList.add(1)
    aLinkedList.add(9)

    aLinkedList.findAll().forEach(element => {
      console.log(`Before delete: ${element.data} -> ${(element.next ? element.next.data : null)}`)
    })

    aLinkedList.remove(5)

    aLinkedList.findAll().forEach(element => {
      console.log(`After delete: ${element.data} -> ${(element.next ? element.next.data : null)}`)
    })
  })
})
