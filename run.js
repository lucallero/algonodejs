
class Node {
  constructor (prev, next, data) {
    this.prev = prev
    this.next = next
    this.data = data
  }

  getNode () {
    return this
  }

  toString () {
    return `${this.node} < ${this.data} > ${this.next}`
  }
}

class LinkedList {
  constructor () {
    this.head = new Node(null, null, 'head')
    this.tail = new Node(this.head, null, 'tail')
    this.head.next = this.tail
  }

  append (data) {
    const node = new Node(this.tail.prev, this.tail, data)
    if (this.tail.prev === this.head) {
      this.head.next = node
      this.tail.prev = node
    } else {
      this.tail.prev.next = node
      this.tail.prev = node
    }
  }

  delete (node) {
    node.prev.next = node.next
  }

  size () {
    let size = 0
    let node = this.head
    while (node) {
      node = node.next
      size++
    }
    return size
  }

  print () {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}

class Elevator {
  constructor (size) {
    this.size = size
  }

  goToFloor (number) {

  }
}
module.exports = {
  LinkedList
}

const llist = new LinkedList()
for (let i = 0; i < 2; i++) {
  llist.append(`Node ${i}`)
}

const size = llist.size()
console.log('Size:', size)
llist.print()
