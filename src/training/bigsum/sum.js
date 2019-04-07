'use strict'
// Complete the aVeryBigSum function below.
function aVeryBigSum (ar) {
  return ar.reduce((sum, value) => { return sum + value }, 0)
}
module.exports = { aVeryBigSum }
