var Mocha = require('mocha')
var mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)



class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(node) {
    if(!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }


  traverse(node, target) {
    while(node.val != target){
      if(target > node.val){
        //go up
        node = node.next
      } else {
        //go down
        node = node.prev
      }
    }
    console.log(`You arrived at floor number: ${node.val}` )
    return node
  }




  toString(){
    console.log(`Prev: - Val: ${this.head.val} Next: ${this.head.next.val}`)

    let node = this.head.next

    while(node.next){
      console.log(`Prev: ${node.prev.val} Val: ${node.val} Next: ${node.next.val}`)
      node = node.next
    }
  }
}


class Door {
  static states = {
    open: 'OPEN',
    closed: 'CLOSED'
  }

  constructor() {
    this.state = Door.states.closed
  }

  open() {
    this.state = Door.states.open
  }

  close() {
    this.state = Door.states.closed
  }

  isClosed(){
    return this.state === Door.states.closed
  }
}


class Elevator {

  constructor(floors){
    this.floors = floors
    this.door = new Door('CLOSED')
    this.centralUnit = new LinkedList()
    for (let i = 0; i < floors; i++){
      this.centralUnit.push(new Node(i))
    }
    this.currentFloor = this.centralUnit.head
  }

  goTo(floor) {
    if(floor > this.floors - 1 || floor < 0) {
      console.log(`Hey, I don't have a floor ${floor}.`)
    }else {
      this.currentFloor = this.centralUnit.traverse(this.currentFloor, floor)
    }
  }

  call(personFloor) {
    this.goTo(personFloor)
  }

  getCurrentFloor() {
    return this.currentFloor
  }

  print(){
    console.log('Floors:', this.floors)
    this.centralUnit.toString()
  }

}


describe('Test suite', function() {
  it('it is a template', function() {
    expect(true).to.be.true
  })
  it('a new Door should be closed', function() {
    const door = new Door()
    expect(door.isClosed()).to.be.true
  })
  it('the door should be OPEN after calling open()', function() {
    const door = new Door()
    door.open()
    expect(door.isClosed()).to.be.false
  })
  it('should have length reflecting the pushed nodes', function() {
    const linkedList = new LinkedList()
    linkedList.push(new Node(0))
    linkedList.push(new Node(1))
    linkedList.push(new Node(2))
    linkedList.push(new Node(3))
    linkedList.push(new Node(4))
    console.log(linkedList.toString())
    expect(linkedList.length).to.be.equal(5)
  })


  it('it should traverse and return the target floor as current floor', function() {
    const elevator = new Elevator(5)

    elevator.print()

    let current = elevator.getCurrentFloor()
    expect(current.val).to.equal(0)

    elevator.goTo(3)
    current = elevator.getCurrentFloor()
    expect(current.val).to.equal(3)

    elevator.goTo(0)
    current = elevator.getCurrentFloor()
    expect(current.val).to.equal(0)

    elevator.call(4)
    current = elevator.getCurrentFloor()
    expect(current.val).to.equal(4)
  })
})

mocha.run()