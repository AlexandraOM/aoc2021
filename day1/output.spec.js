const fs = require('fs')

const { rateOfIncrease, rateOfSumOfIncrease } = require('./output')

const depths = fs
  .readFileSync(`${__dirname}/test-input.txt`)
  .toString()
  .split('\n')
  .map((x) => parseInt(x))

describe('rateOfIncrease', () => {
  it('returns 7', () => {
    expect(rateOfIncrease(depths)).toBe(7)
  })
})
describe('rateOfSumOfIncrease', () => {
  it('returns 5', () => {
    expect(rateOfSumOfIncrease(depths)).toBe(5)
  })
})
