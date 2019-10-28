'use strict'
function main (A) {
  let distincts = new Set()
  for (let i = 0; i < A.length; i++) {
    distincts.add(A[i])
  }
  return distincts.size
}
module.exports = { main }
