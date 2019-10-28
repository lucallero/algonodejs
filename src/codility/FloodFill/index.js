'use strict'

function main (S) {
  let triplets = S.match(/aaa|bbb/g)
  if (triplets) {
    return S.length - triplets.length - 1
  }
  return S.length
}
module.exports = { main }
