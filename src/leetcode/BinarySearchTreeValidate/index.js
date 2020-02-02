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
var isValidBST = function (root) {
  const values = []
  const result = true
  const traverse = (node) => {
    if (!node) return

    traverse(node.left)

    // if (node.val <= values[values.length - 1]) {
    //   result = false
    //   return
    // }

    traverse(node.right)
    values.push(node.val)
  }
  traverse(root, null)
  console.log(values)
  return result
}

// const root = new TreeNode(10)
// root.left = new TreeNode(5)
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(7)
// root.right = new TreeNode(15)
// root.right.left = new TreeNode(12)
// root.right.right = new TreeNode(20)

// [4, 2, 6, 1, 3, 5, 7]

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)

console.log(isValidBST(root))
