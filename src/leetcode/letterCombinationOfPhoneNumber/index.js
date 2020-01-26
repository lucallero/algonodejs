const letterMap = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
var letterCombinations = function (digits) {
  if (!digits) return []
  const result = []
  const helper = (digits, letter, tmpBuff) => {
    if (!digits && !letter) {
      result.push(tmpBuff)
      return
    }
    if (letter) tmpBuff += letter

    if (letterMap[digits[0]]) {
      for (let i = 0; i < letterMap[digits[0]].length; i++) {
        helper(digits.slice(1), letterMap[digits[0]][i], tmpBuff)
      }
    } else {
      helper(null, null, tmpBuff)
    }
  }
  helper(digits, '', '')
  return result
}
