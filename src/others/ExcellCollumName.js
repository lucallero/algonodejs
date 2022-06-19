/**
 * @param n: a integer
 * @return: return a string
 */
function convertToTitle(n) {
    if( n < 1 || n > 500) {
        return 'Invalid code'
    }
    const ASCII_OFFSET = 64
    const ASCII_RANGE = 26

    if (n <= ASCII_RANGE) {
        return String.fromCharCode(ASCII_OFFSET + n)
    } else {
        let mod = (n % ASCII_RANGE)
        let firstChar = ASCII_OFFSET + mod
        let secondChar = ASCII_OFFSET + (n - (ASCII_RANGE * mod))
        return String.fromCharCode(firstChar, secondChar)
    }
}

console.log(convertToTitle(29))