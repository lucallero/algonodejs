/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

// mocha.suite.emit('pre-require', this, 'solution', mocha)

var removeInvalidParentheses = function (s) {
  const result = []
  const minRemoved = Number.MAX_SAFE_INTEGER

  const removeHelper = (input, stack, solution, removeCount, position) => {
    let index = 0
    for (const current of input) {
      index++
      if (current === '(') stack++
      if (current === ')') stack--
      if (stack >= 0) {
        solution += current
      } else {
        removeCount++
        stack = 0
      }
    }
    result.push(solution)
    solution = ''

    for (let i = input.length - 1; i >= 0; i--) {
      if (input.charAt(i) === ')') stack++
      if (input.charAt(i) === '(') stack--
      if (stack >= 0) {
        solution = input.charAt(i) + solution
      } else {
        removeCount++
        stack = 0
      }
    }
    result.push(solution)
    console.log('solution:', solution)
  }

  removeHelper(s, 0, '', 0, 1)

  return result
}

describe('| TESTS |', () => {
  it('Should test Parentesis ()', () => {
    const input = '()())()'
    const expected = ['()()()', '(())()']
    const result = removeInvalidParentheses(input)
    expect(result).to.eql(expected)
  })

  it.only('Should test Parentesis ()', () => {
    const input = '(a)())()'
    const expected = ['(a)()()', '(a())()']
    const result = removeInvalidParentheses(input)
    expect(result).to.eql(expected)
  })

  it('Should test Parentesis ()', () => {
    const input = ')('
    const expected = ['']
    const result = removeInvalidParentheses(input)
    expect(result).to.eql(expected)
  })
})

// mocha.run()
