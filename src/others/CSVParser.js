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

function parseCsvFile (f) {
  const result = []
  let props = []
  const csv = f.split('\n')
  for (let line = 0; line < csv.length; line++) {
    const record = csv[line].split(',')
    if (line === 0) {
      // parse first line
      props = record.map(e => e.replace(/"/g, '').trim())
    } else {
      // parse records
      result.push(parseCsvRecord(props, record))
    }
  }
  return result
}

function parseCsvRecord (props, record) {
  const result = {}
  for (let i = 0; i < props.length; i++) {
    result[props[i]] = record[i].replace(/"/g, '').trim()
  }
  return result
}

function filter (list, column, value) {
  return list.filter(e => e[column] === value)
}

function filterAge (list, from, to) {
  return list.filter(e => e.Age >= from && e.Age <= to)
}

function main () {
  const personList = parseCsvFile(file)

  const subset = filterAge(filter(personList, 'Sex', 'M'), 0, 300)

  console.log(subset)
}

main()
