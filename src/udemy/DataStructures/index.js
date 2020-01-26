console.log('Hi')

class Student {
  constructor (name, year) {
    this.name = name
    this.year = year
  }

  reverseName () {
    return this.name.split('').reverse().join('')
  }
}

const emil = new Student('Email', 'Katz')

console.log(emil.name)
console.log(emil.reverseName())
