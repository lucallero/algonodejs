class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  search (val) {
    if (!this.root) return false
    const helper = (node, val) => {
      if (!node) return node
      if (node.value === val) return node
      if (val > node.value) return helper(node.right, val)
      if (val < node.value) return helper(node.left, val)
    }
    return helper(this.root, val)
  }

  add (val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    const helper = (node, val) => {
      if (!node.left && val < node.value) {
        node.left = new Node(val)
        return
      }
      if (!node.right && val > node.value) {
        node.right = new Node(val)
        return
      }
      if (val < node.value) return helper(node.left, val)
      if (val > node.value) return helper(node.right, val)
      console.log('No duplicates')
    }
    helper(this.root, val)
    return this
  }

  addLooping (val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    let current = this.root
    while (true) {
      if (val === current.value) return undefined
      if (val < current.value) {
        if (!current.left) {
          current.left = new Node(val)
          return this
        } else current = current.left
      }
      if (val > current.value) {
        if (!current.right) {
          current.right = new Node(val)
          return this
        } else current = current.right
      }
    }
  }
}

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
