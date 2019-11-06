// Transform enemies pairs into a Map
let indexEnemies = (n, a, b, enemies) => {
  for (let i = 1; i <= n; i++) {
    enemies.set(i, [])
  }
  for (let i = 0; i < a.length; i++) {
    enemies.get(a[i]).push(b[i])
    enemies.get(b[i]).push(a[i])
  }
  return enemies
}
// Decide which value should be the last max enemy
let maxOrEnemy = (i, enemies, max) => {
  let iEnemies = enemies.get(i).filter(e => e > i)
  return Math.min(...iEnemies, max)// the enemy that is closest to and greater than i
}
// Top down aproach, counts the number of groups in each interval
let countGroups = (n, a, b) => {
  let enemies = indexEnemies(n, a, b, new Map())
  let counting = 0
  let max = n + 1 // max starts as the number of animals plus one
  for (let i = n; i > 0; i--) {
    max = maxOrEnemy(i, enemies, max)
    counting += max - i
  }
  return counting
}

function main (n, a, b) {
  return countGroups(n, a, b)
}

module.exports = { main }
