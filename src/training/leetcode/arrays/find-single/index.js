'use strict'

// Works but it is slow
// function badSolution (nums) {
//   let notSingle
//   for (let i = 0; i < nums.length; i++) {
//     notSingle = false
//     for (let j = 0; j < nums.length; j++) {
//       if (!(j === i) && nums[i] === nums[j]) {
//         notSingle = true
//         break
//       }
//     }
//     if (!notSingle) return nums[i]
//   }
// }

function main (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i]
    }
  }
}
module.exports = { main }
