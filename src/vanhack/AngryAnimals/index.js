let enemiesMemo = (i, a, b, enemiesMap) => {
  if (!enemiesMap.has(i)) {
    let iEnemies = []
    a.filter((enemy, at) => (enemy === i) ? iEnemies.push(b[at]) : '_')
    b.filter((enemy, at) => (enemy === i) ? iEnemies.push(a[at]) : '_')
    enemiesMap.set(i, iEnemies)
  }
  return enemiesMap.get(i)
}

let makeSubGroups = (i, n, subgroup, gEnemies, groups, enemiesMap, a, b) => {
  if (i > n) return subgroup
  if (gEnemies.some(enemy => enemy === i)) {
    return subgroup
  }
  subgroup.push(i)
  console.log(subgroup.slice(0))
  groups.add(subgroup.slice(0))
  enemiesMemo(i, a, b, enemiesMap).map(enemy => gEnemies.push(enemy))
  return makeSubGroups(i + 1, n, subgroup, gEnemies, groups, enemiesMap, a, b)
}

let makeGroups = (n, enemiesMap, a, b) => {
  let groups = new Set()
  for (let i = 1; i <= n; i++) {
    makeSubGroups(i, n, [], [], groups, enemiesMap, a, b)
  }
  return groups
}

function main (n, a, b) {
  return makeGroups(n, new Map(), a, b).size
}

module.exports = { main }
