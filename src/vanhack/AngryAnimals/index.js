let indexEnemies = (n, a, b) => {
  let enemiesMap = new Map()
  if (enemiesMap.size === 0) {
    for (let i = 1; i <= n; i++) {
      enemiesMap.set(i, [])
    }
    if (a && b) {
      for (let i = 0; i < a.length; i++) {
        enemiesMap.get(a[i]).push(b[i])
        enemiesMap.get(b[i]).push(a[i])
      }
    }
  }
  return enemiesMap
}

let countGroups = (n, a, b) => {
  let enemiesMap = indexEnemies(n, a, b)
  let groups = 0
  for (let i = 1; i <= n; i++) {
    let enemies = new Set()
    for (let j = i; j > 0; j--) {
      enemiesMap.get(j).map(enemy => enemies.add(enemy))
      if (!enemies.has(j)) {
        ++groups
      } else {
        break
      }
    }
  }
  return groups
}

function main (n, a, b) {
  return countGroups(n, a, b)
}

module.exports = { main, indexEnemies }
