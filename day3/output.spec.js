const fs = require('fs')

const { findConsumptionRate, findLifeSupportRating } = require('./output')

const binaryNums = fs
  .readFileSync(`${__dirname}/test-input.txt`)
  .toString()
  .split('\n')

describe('findConsumptionRate', () => {
  it('returns 198', () => {
    expect(findConsumptionRate(binaryNums)).toBe(198)
  })
})

describe('findLifeSupportRating', () => {
  it('returns 230', () => {
    expect(findLifeSupportRating(binaryNums)).toBe(230)
  })
})
