

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]

function rotate(nums, k) {
    let slice = nums.splice(nums.length - k, k)
    for (let i = slice.length - 1; i > -1; i--) {
        nums.unshift(slice[i])
    }
    return nums
}
module.exports = { rotate }