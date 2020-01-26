/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function reverse (str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

function isPalindrome (str) {
  const begin = str.charAt(0)
  const end = str.charAt(str.length - 1)

  if (str.length <= 1) return true

  if (begin !== end) return false

  return isPalindrome(str.substring(1, str.length - 1))
}

function someRecursive (arr, isTrue) {
  if (arr.length === 0) return false

  if (isTrue(arr[0])) return true

  return someRecursive(arr.slice(1), isTrue)
}
// const isOdd = val => val % 2 !== 0;

function flatten (arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (Array.isArray(arr[0])) {
    newArr = newArr.concat(flatten(arr[0]))
  } else {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(flatten(arr.slice(1)))

  return newArr
}
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([1, 2, 3, [4, 5] ])
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log(reverse('zillion'))
