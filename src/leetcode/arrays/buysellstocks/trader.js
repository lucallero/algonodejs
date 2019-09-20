'use strict'

// Input: [7,1,5,3,6,4]
// Output: 7

function maxProfit (prices) {
  let buyPrice = 0
  let profits = 0
  let state = 'sold'
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i] && state !== 'holding') {
      buyPrice = prices[i]
      state = 'holding'
    } else if (state === 'holding') {
      if ((prices[i + 1] < prices[i]) || (!prices[i + 1] && prices[i] > buyPrice)) {
        state = 'sold'
        profits += prices[i] - buyPrice
      }
    }
  }
  return profits
}

module.exports = { maxProfit }
