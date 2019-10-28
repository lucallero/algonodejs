function main (arr, k) {
  if (!arr || !k) return 'NO'
  if (k < 1 || k > 10 ** 5) return 'NO'

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 10 ** 5) {
      return 'NO'
    }
    if (arr[i] === k) {
      return 'YES'
    }
  }
  return 'NO'
  // return arr.find(element => element === k) ? 'YES' : 'NO'
}
module.exports = { main }
