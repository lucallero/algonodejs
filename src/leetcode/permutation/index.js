/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */

var swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

// Generating permutation using Heap Algorithm
var heapPermutation = (a, size, solution) => {
  // if size becomes 1 then prints the obtained
  // permutation
  if (size === 1) {
    // printArr(a);
    solution.push(a.slice(0))
    return
  }

  for (let i = 0; i < size; i++) {
    heapPermutation(a, size - 1, solution)

    // if size is odd, swap first and last
    // element
    if (size % 2 === 1) { swap(a, 0, size - 1) }

    // If size is even, swap ith and last
    // element
    else { swap(a, i, size - 1) }
  }
}

var permuteUnique = function (nums) {
  const solution = []
  const unique = new Set()
  permutateHelper(nums, nums.length, solution, unique)
  console.log(solution, unique)
  return solution
}

const permutateHelper = (a, size, solution, unique) => {
  if (size === 1) {
    const permutation = a.slice(0)
    const permutationLabel = permutation.join('')
    if (!unique.has(permutationLabel)) {
      solution.push(permutation)
      unique.add(permutationLabel)
    }
    return
  }
  for (let i = 0; i < size; i++) {
    permutateHelper(a, size - 1, solution, unique)
    if (size % 2) swap(a, 0, size - 1)
    else swap(a, i, size - 1)
  }
}

// Driver code

const a = [1, 1, 2, 3]
const solution = []
// heapPermutation(a, n, solution);
permuteUnique(a)
