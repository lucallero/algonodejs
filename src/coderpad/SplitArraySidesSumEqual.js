/**
 * Split an array so both sides sum to the same value
 * [1,2,3] true
 *
 * Start point:
 * rightSum = 6
 *
 * i |value|leftSum|rightSum
 * 0  1     1       (6-1) 5
 * 1  2     3       (5-2) 3
 *
 * [1,2, 2,1] true
 * [1,2,3, 5,1] true
 * [1,2,3,4] false
 *
 * Initially sum the array and keep this as the rightSum
 * Walk from left to right to get the leftSum
 * Update rightSum subtracting the leftSum
 * Check if left and righ sum are equal
 */

/**
 * Return the index where to split the array
 * having both sides summing the same.
 * If not possible will return -1.
 */
 function splitArray(array) {
    let rightSum = sumArray(array)
    let leftSum = 0
    for (let [i, value] of array.entries()) {
      leftSum += value
      rightSum -= value
      if( leftSum === rightSum) {
        return i
      }
    }
    return -1
  }

  function sumArray(array) {
    return array.reduce((a, b) => a + b, 0)
  }

  function main() {
    console.log(splitArray([1,2,3]))
    console.log(splitArray([1,2,3,5,1]))
    console.log(splitArray([1,2,3,5]))
  }

  main()
