function main (loggedMoves) {
  return loggedMoves
    .map((move) => {
      if (move === '../') return -1
      else if (move === './') return 0
      else return 1
    })
    .reduce((accum, element) => accum + element)
}
module.exports = { main }
