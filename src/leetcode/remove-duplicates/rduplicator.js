/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const should = require('chai').should()
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
chai.use(deepEqualInAnyOrder)

// 'use strict'
// function removeDuplicates (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1)
//       --i
//     }
//   }
//   return nums.length
// }

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      --i
    }
  }
  return nums
}

describe('Should test remove duplicates  function.', () => {
  it('should return a number', async () => {
    const result = removeDuplicates([0, 0, 1, 1])
    result.should.be.an('Array')
  })

  it('should return an array with no duplicates items equal to [0, 1, 2, 3, 4]', async () => {
    const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    result.should.deep.equalInAnyOrder([0, 1, 2, 3, 4])
  })

  it('should return an array with no duplicates items equal to [1, 2]', async () => {
    const result = removeDuplicates([1, 1, 2])
    result.should.deep.equalInAnyOrder([1, 2])
  })

  it('should return an array with no duplicates items equal to [1]', async () => {
    const result = removeDuplicates([1, 1, 1, 1])
    result.should.deep.equalInAnyOrder([1])
  })

  it('should return an array with no duplicates items equal to [1,2,3]', async () => {
    const result = removeDuplicates([1, 2, 3])
    result.should.deep.equalInAnyOrder([1, 2, 3])
  })
})
