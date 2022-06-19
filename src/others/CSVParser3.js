// console.log('read the file /home/coderpad/data/persons.csv and print the content')

let fs = require('fs')

function readFile(fileName) {  
  return fs.readFileSync(fileName, 'utf8')  
}


/**
 * Parse conte of a line
 * Sanitize content:
 * rips off empty spaces, new lines, double quotes 
 */
function parseLine(line) {
  return line.replace(/\s+|\"/g, '')
}

/**
 * Parse content of a csv 
 * Header will give the property names
 * Return an array of objects
 */
function parseCSV(content) {
  let result = []      
  let lines = content.split('\n')  
  if(lines[lines.length -1 ] === '') {
    lines.pop() //remove empty line from the end
  }
  let headers = parseLine(lines.shift()).split(',')

  for(let line of lines) {
    let obj = {}
    let saneLine = parseLine(line)
    for(let [i,value] of saneLine.split(',').entries()){
      obj[headers[i]] = value
    }
    result.push(obj)
  }
  return result
}

function query(data, property, value) {
  return data.filter(x => x[property] === value)
}

function queryByAgeRange(data, lowerBound, upperBound) {
  return data.filter(x => x.Age >= lowerBound && x.Age <= upperBound)
}

function sortByAscend(data, property) {
  return data.sort((a,b) => a[property] - b[property])
}

function sortByDescend(data, property) {
  return data.sort((a,b) => b[property] - a[property])
}

function getTopN(data, n){
  return data.slice(0, n)
}

function main() {
  let file = readFile('/home/coderpad/data/persons.csv')
  let data = parseCSV(file)

  console.log(getTopN(sortByDescend(data, 'Weight'), 5))
  
  // let resultSet = queryByAgeRange(data, '34', '36')
  // console.log(resultSet)
}

main()

