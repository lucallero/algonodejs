'use strict'
function main (s) {
  if (s.indexOf('B') < 0) return (s.length - 1)
  if (s.indexOf('A') < 0) return (s.length - 1)
  return (s.length - s.match(/AB/g).length * 2)
}
module.exports = { main }
