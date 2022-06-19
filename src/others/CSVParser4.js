// console.log('read the file /home/coderpad/data/persons.csv and print the content')
/*
- read content from file
- each line is a record
- parse CSV content into array of objects
  - first line has headers, which will become properties
  - loop line by line, to conver a record into an object
  - fields correlate to headers according the position (column)
  - push obj into array
- query the datastructure with filter and sort methods
*/
const fs = require('fs')

function readFile(path) {
  return fs.readFileSync(path, 'utf8')
}

function parseLine(line) {
  return line.replace(/\s+|\"/g,'')
}

function parseCSV(content) {
  const data = []
  const lines = content.split('\n')
  const headers = parseLine(lines.shift()).split(',')

  for(const line of lines){
    let obj = {}
    for(const [i, value] of parseLine(line).split(',').entries()){
      obj[headers[i]] = value
    }
    data.push(obj)
  }
  return data
}

function query(data, property, value){
  return data.filter(x => x[property] === value)
}

function sort(data, property, asc=true) {
  const innerSort = (x, y) => {
    if(asc) {
      return x[property] - y[property]
    }
    return y[property] - x[property]
  }
  return data.sort(innerSort)
}

function main() {
  const content = readFile('./data.csv')
  const data = parseCSV(content)
  const resultSet = query(data, 'Sex', 'F')
  const filtered = sort(resultSet, 'Height', false)
    .map(x => {
      let { Age, ...newObj} = x
      return newObj
    })

  console.log(filtered)
}

main()
