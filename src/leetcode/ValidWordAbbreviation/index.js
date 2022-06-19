/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let wordI = -0
  let i = 0

  for (; i < abbr.length; i++) {

    if (abbr[i] === '0') {
      return false
    }

    if (isNumber(abbr[i])) {
      let [num, steps] = parseNumberInAbbr(abbr.substring(i))
      wordI += num
      i += steps - 1
    } else if (word[wordI] === abbr[i]) {
      wordI++
    } else {
      return false
    }
  }
  return wordI === word.length
};


const isNumber = (s) => {
  return /[0-9]/g.test(s)
}

const parseNumberInAbbr = (s) => {
  let digits = ''
  let i = 0
  while (isNumber(s[i])) {
    digits += s[i]
    i++
  }
  return [parseInt(digits), i]
}


module.exports = validWordAbbreviation
