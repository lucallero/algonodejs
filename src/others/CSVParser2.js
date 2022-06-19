const file = `"Name",     "Sex", "Age", "Height", "Weight"
"Alex",       "M",   41,       74,      170
"Bert",       "M",   42,       68,      166
"Carl",       "M",   32,       70,      155
"Dave",       "M",   39,       72,      167
"Elly",       "F",   30,       66,      124
"Fran",       "F",   33,       66,      115
"Gwen",       "F",   26,       64,      121
"Hank",       "M",   30,       71,      158
"Ivan",       "M",   53,       72,      175
"Jake",       "M",   32,       69,      143
"Kate",       "F",   47,       69,      139
"Luke",       "M",   34,       72,      163
"Myra",       "F",   23,       62,       98
"Neil",       "M",   36,       75,      160
"Omar",       "M",   38,       70,      145
"Page",       "F",   31,       67,      135
"Quin",       "M",   29,       71,      176
"Ruth",       "F",   28,       65,      131`

const fs = require('fs')

function readFile(file) {
  return fs.readFileSync(file, 'utf8')
}

function formatLine(line){
  return line.replace(/\s+|\"/g, '')
}

/**
 * Parse a CSV file into an array of objects
 * Header line will translate into properties
 * e.g. { Name, Sex, Age, Heigh, Weight}
 */
function parseCSV(fileContent){
  const data = []

  const lines = fileContent.split('\n')
  if(lines[lines.length - 1].trim() === ''){
    lines.pop()
  }
  const headers = formatLine(lines.shift()).split(',')

  for(let l of lines){
    let line = formatLine(l)
    let person = {}
    for(let [i, value] of line.split(',').entries()){
      person[headers[i]] = value
    }
    data.push(person)
  }
  return data
}

function querySex(data, value){
  return data.filter(p => p.Sex === value)
}

function sortByAge(data){
  return data.sort((a, b) => a.Age - b.Age)
}

function main(){
  let fileContent = readFile('/home/coderpad/data/persons.csv')
  let data = parseCSV(fileContent)
  console.log(sortByAge(querySex(data, 'M')))
}

main()


