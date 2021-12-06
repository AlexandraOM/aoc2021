const fs = require('fs')

const { depthByDistance, depthByDistanceAndAim } = require('./output')

const instructionList = fs
  .readFileSync(`${__dirname}/test-input.txt`)
  .toString()
  .split('\n')

describe('rateOfIncrease', () => {
  it('returns 150', () => {
    expect(depthByDistance(instructionList)).toBe(150)
  })
})

describe('depthByDistanceAndAim', () => {
  it('returns 900', () => {
    expect(depthByDistanceAndAim(instructionList)).toBe(900)
  })
})
