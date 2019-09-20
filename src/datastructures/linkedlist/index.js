class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  getHead () {
    return this.head
  }

  getTail () {
    return this.tail
  }

  add (data) {
    let newNode = new Node(data, null)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  remove (data) {
    let node = this.find(data)
    let current = this.head
    while (current.next) {
      if (current.next === node) {
        current.next = node.next
        return node
      }
    }
  }

  removeHead () {
    let removed = this.head
    this.head = this.head.next
    return removed
  }

  find (data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
  }

  findAll () {
    let result = []
    let current = this.head
    while (current) {
      result.push(current)
      current = current.next
    }
    return result
  }
}

class Node {
  constructor (data, link) {
    this.data = data
    this.next = link
  }
}

module.exports = LinkedList
