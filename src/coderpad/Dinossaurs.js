const input1 = `NAME,LEG_LENGTH,DIET
Hadrosaurus,1.4,herbivore
Struthiomimus,0.72,omnivore
Velociraptor,1.8,carnivore
Triceratops,0.47,herbivore
Euoplocephalus,2.6,herbivore
Stegosaurus,1.50,herbivore
Tyrannosaurus Rex,6.5,carnivore`

const input2 = `NAME,STRIDE_LENGTH,STANCE
Euoplocephalus,1.97,quadrupedal
Stegosaurus,1.70,quadrupedal
Tyrannosaurus Rex,4.76,bipedal
Hadrosaurus,1.3,bipedal
Deinonychus,1.11,bipedal
Struthiomimus,1.24,bipedal
Velociraptor,2.62,bipedal`

const dinosCatalog = new Map()

/**
 * Read CSV format and return and array of Dino objects
 * e.g.: [{ NAME: 'Stegosaurus', STRIDE: '1.70' }]
 */
function parseCSV(csv) {
  const result =[]
  const lines = csv.split('\n')

  const header = lines.shift().split(',')

  for(let l of lines) {
    let lineData = l.split(',')
    let dinoObj = {}
    for (const [i, property] of header.entries()) {
      dinoObj[property] = lineData[i]
    }
    result.push(dinoObj)
  }
  return result
}


function calcSpeed(dino) {
  const G = 9.8
  const speed  = ((dino.STRIDE_LENGTH / dino.LEG_LENGTH) - 1) * Math.sqrt(dino.LEG_LENGTH * G)
  return Number.parseFloat(speed).toFixed(2)
}

function mergeDinos(dino1, dino2) {
  if(!dino1 ) return dino2
  if(!dino2 ) return dino1
  for(let property of Object.keys(dino1)){
    dino2[property] = dino1[property]
  }
  return dino2
}

function catalogDino(newDino) {
  let dino = dinosCatalog.get(newDino.NAME)
  if(dino){
    newDino = mergeDinos(dino, newDino)
    newDino['SPEED'] = calcSpeed(newDino)
  }
  dinosCatalog.set(newDino.NAME, newDino)
}

function catalogAll(dinoInfoArray) {
  for(const dino of dinoInfoArray){
    catalogDino(dino)
  }
}

function printDinos(dinoArray, propertySelection) {
  for (const dino of dinoArray) {
    if(propertySelection){
      console.log(dino[propertySelection], dino.SPEED)
    }else {
      console.log(dino)
    }
  }
}

function query(property, value) {
  let resultSet = [...dinosCatalog.values()]
  if(!property ||!value) {
    return resultSet
  }
  return resultSet.filter(d => d[property] === value)
}

function main() {
  let dinoInfo1 = parseCSV(input1)
  catalogAll(dinoInfo1)

  let dinoInfo2 = parseCSV(input2)
  catalogAll(dinoInfo2)

  console.log(dinosCatalog)

  const bipedals = query('DIET', 'carnivore')
  // const bipedals = query('STANCE', 'bipedal')
  const sorted = bipedals.sort((a, b) => b.SPEED - a.SPEED)
  printDinos(sorted, 'NAME')
}

main()

