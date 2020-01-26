class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.length = 0
  }

  push (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    if (!this.head) return undefined
    let preTail = this.head
    let current = this.head.next
    while (current.next) {
      preTail = current
      current = current.next
    }
    this.tail = preTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift () {
    if (!this.head) return undefined
    const tmp = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return tmp
  }

  unshift (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  traverse () {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
    console.log(this)
  }
}

const ll = new SinglyLinkedList()
ll.push('Hey')
ll.push('Hã')
ll.push('Ho')
ll.traverse()
console.log('-->', ll.shift())
ll.traverse()
console.log('-->', ll.unshift('Yeay!'))
ll.traverse()
