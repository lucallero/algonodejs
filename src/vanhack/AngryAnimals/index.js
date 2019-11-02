let indexEnemies = (n, a, b) => {
  let eMap = new Map()
  for (let i = 1; i <= n; i++) {
    eMap.set(i, new Set())
  }
  if (a && b) {
    for (let i = 0; i < a.length; i++) {
      eMap.get(a[i]).add(b[i])
      eMap.get(b[i]).add(a[i])
    }
  }
  return eMap
}

let findJEnemies = (j, eMap, gEnemies) => {
  Array.from(eMap.get(j)).map(element => gEnemies.add(element))
  return gEnemies
}

function main (n, a, b) {
  let eMap = indexEnemies(n, a, b)
  let groups = new Set()

  for (let i = 1; i <= n; i++) {
    let enemies = new Set()
    let group = new Set()
    for (let j = i; j <= n; j++) {
      findJEnemies(j, eMap, enemies)
      if (group.size > 0) {
        groups.add(Array.from(group.values()))
      }
      if (j + 1 <= n) {
        if (!enemies.has(j + 1)) {
          group.add(j)
          group.add(j + 1)
        } else {
          break
        }
      }
    }
  }
  return groups.size + n
}

module.exports = { main, indexEnemies, findJEnemies }
