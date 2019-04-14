'use strict'
function main (l1) {
  let values = []
  let current = l1.getHead()
  while (current) {
    values.push(current)
    current = current.next
  }
  for (let i = 0; i < values.length / 2; i++) {
    if (!(values[i].data === values[values.length - 1 - i].data)) {
      return false
    }
  }
  return true
}
module.exports = { main }
