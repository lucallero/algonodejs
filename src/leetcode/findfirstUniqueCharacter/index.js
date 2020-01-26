/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// https://leetcode.com/problems/first-unique-character-in-a-string/

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)

class Metadata {
  constructor (char, position) {
    this.char = char
    this.position = position
    this.occurrencies = 1
  }

  getChar () {
    return this.char
  }

  getPosition () {
    return this.position
  }

  getOccurrencies () {
    return this.occurrencies
  }

  increment () {
    this.occurrencies++
  }
}

class CharCounter {
  constructor () {
    this.countingMap = new Map()
  }

  count (char, position) {
    if (this.countingMap.has(char)) {
      this.countingMap.get(char).increment()
    } else {
      this.countingMap.set(char, new Metadata(char, position))
    }
  }

  getNonRepeating () {
    return Array.from(this.countingMap.values()).filter(element => element.getOccurrencies() === 1)
  }

  getFirstNonRepeating () {
    if (this.getNonRepeating().length === 0) {
      return -1
    }
    return this.getNonRepeating().sort((a, b) => a.getPosition() - b.getPosition())[0].getPosition()
  }
}

const findFirsNonRepeating = (s) => {
  const counter = new CharCounter()
  for (let i = 0; i < s.length; i++) {
    counter.count(s[i], i)
  }
  return counter.getFirstNonRepeating()
}

describe('<< TESTS >>', () => {
  it('Should test Metadata class', () => {
    const aMetadata = new Metadata('a', 0)
    expect(aMetadata.getOccurrencies()).to.equal(1)
    expect(aMetadata.getChar()).to.equal('a')
    expect(aMetadata.getPosition()).to.equal(0)
    aMetadata.increment()
    aMetadata.increment()
    expect(aMetadata.getOccurrencies()).to.equal(3)
  })

  it('Should test CharCounter class', () => {
    const aCharCounter = new CharCounter()
    aCharCounter.count('a', 0)
    aCharCounter.count('a', 1)
    aCharCounter.count('b', 2)
    aCharCounter.count('c', 3)
    aCharCounter.count('a', 4)
    const result = aCharCounter.getNonRepeating()
    expect(aCharCounter.getNonRepeating().length).to.equal(2)
    expect(aCharCounter.getFirstNonRepeating()).to.equal(2)
  })

  it('Should test CharCounter class with z', () => {
    const aCharCounter = new CharCounter()
    aCharCounter.count('z', 0)
    const result = aCharCounter.getNonRepeating()
    expect(aCharCounter.getNonRepeating().length).to.equal(1)
    expect(aCharCounter.getFirstNonRepeating()).to.equal(0)
  })

  it('Should run findFirsNonRepeating and return -1', () => {
    const result = findFirsNonRepeating('')
    expect(result).to.equal(-1)
  })

  it('Should run findFirsNonRepeating and return 0', () => {
    const result = findFirsNonRepeating('z')
    expect(result).to.equal(0)
  })

  it('Should run findFirsNonRepeating and return 0', () => {
    const result = findFirsNonRepeating('leetcode')
    expect(result).to.equal(0)
  })
  it('Should run findFirsNonRepeating and return 2', () => {
    const result = findFirsNonRepeating('loveleetcode')
    expect(result).to.equal(2)
  })
})
mocha.run()
