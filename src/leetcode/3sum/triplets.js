/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// https://leetcode.com/problems/3sum/

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)

class TripletFinder {
  constructor (array) {
    this.triplets = new Set()
    this.numbers = array.sort((a, b) => a - b)
  }

  findTriplets () {
    for (let i = 0; i <= this.numbers.length; i++) {
      const Ni = this.numbers[i]

      for (let j = i + 1; j < this.numbers.length; j++) {
        const Nj = this.numbers[j]
        const complement = (Ni + Nj) * -1

        for (let k = j + 1; k < this.numbers.length; k++) {
          const Nk = this.numbers[k]
          // console.log('Ni:',this.numbers[i], 'Nj:', this.numbers[j],'Nk:', this.numbers[k])
          if (Nk === complement) {
            this.triplets.add(JSON.stringify([Ni, Nj, Nk]))
          }
        }
      }
    }
  }

  getResult () {
    const result = Array.from(this.triplets).map(element => JSON.parse(element))
    return result
  }
}

const main = (nums) => {
  const tripletFinder = new TripletFinder(nums)
  tripletFinder.findTriplets()
  return tripletFinder.getResult()
}

describe('<< TESTS >>', () => {
  it('Should test main function', () => {
    const result = main([-1, 0, 1, 2, -1, -4])
    console.log(result)
    const solution = [[-1, -1, 2], [-1, 0, 1]]
    expect(result).to.eql(solution)
  })
  it('Should test main function', () => {
    const result = main([0, 0, 0])
    console.log(result)
    const solution = [[0, 0, 0]]
    expect(result).to.eql(solution)
  })
})

mocha.run()
