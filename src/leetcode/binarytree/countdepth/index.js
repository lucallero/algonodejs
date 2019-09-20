'use strict'
function main (root) {
  return countDepth(root, 0)
}

var countDepth = function (node, depth) {
  let leftDepth = 0
  let rightDepth = 0
  if (!node) {
    return depth
  }
  if (!node.left && !node.right) {
    return ++depth
  } else {
    leftDepth += countDepth(node.left, 1)
    rightDepth += countDepth(node.right, 1)
  }
  depth += (leftDepth > rightDepth ? leftDepth : rightDepth)
  return depth
}

module.exports = { main }
