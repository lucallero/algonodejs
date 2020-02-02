/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */

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
var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER

  const dfs = (node) => {
    if (!node) return 0

    const left = Math.max(dfs(node.left), 0)
    const right = Math.max(dfs(node.right), 0)
    const total = node.val + left + right

    maxSum = Math.max(maxSum, total)
    return node.val + Math.max(left, right)
  }
  dfs(root)
  return maxSum
}

// const root = new TreeNode(10)
// root.left = new TreeNode(5)
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(7)
// root.right = new TreeNode(15)
// root.right.left = new TreeNode(12)
// root.right.right = new TreeNode(20)

// [4, 2, 6, 1, 3, 5, 7]

// const root = new TreeNode(4)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(1)
// root.left.right = new TreeNode(3)
// root.right = new TreeNode(6)
// root.right.left = new TreeNode(5)
// root.right.right = new TreeNode(7)

// [-10,9,20,null,null,15,7]
const root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(maxPathSum(root))
