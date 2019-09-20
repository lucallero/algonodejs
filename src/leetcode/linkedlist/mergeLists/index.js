'use strict'
function mainSTUPID (l1, l2) {
  let node1 = l1.getHead()
  let node2 = l2.getHead()
  let next = null
  let next2 = null

  if (!l1.getHead()) {
    return l2
  }

  if (!l2.getHead()) {
    return l1
  }

  while (node1 && node2) {
    if (node2 >= node1) {
      next = node1.next // saving next from head1 for later
      node1.next = node2 // updating head1 next with l2 head

      next2 = node2.next // saving l2 next
      node2.next = next // updating l2 next to l1 former next

      node2 = next2 // moving forward
      node1 = next // moving forward
    }
  }
  return l1
}

function main (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }

  if (l1.val <= l2.val) {
    l1.next = main(l1.next, l2)
    return l1
  } else {
    l2.next = main(l1, l2.next)
    return l2
  }
}
module.exports = { main }
