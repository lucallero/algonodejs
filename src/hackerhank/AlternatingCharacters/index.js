'use strict'
function main (s) {
  let deletions = 0
  if (s.indexOf('B') < 0) return (s.length - 1)
  if (s.indexOf('A') < 0) return (s.length - 1)
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i + 1) === s.charAt(i)) {
      deletions++
    }
  }
  return deletions
}
module.exports = { main }
