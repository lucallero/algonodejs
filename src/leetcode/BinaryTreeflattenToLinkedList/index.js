/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

// mocha.suite.emit('pre-require', this, 'solution', mocha)
/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var flatten = function (root) {
  const nodes = []

  const traverse = (node) => {
    if (!node) return

    nodes.push(node)
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)

  root = nodes.shift()
  let current = root
  while (nodes.length) {
    current.right = nodes.shift()
    current = current.right
  }

  return root
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(5)
root.right.left = new TreeNode(6)
// root.right.right = new TreeNode(20)

console.log(flatten(root))
