const fs = require('fs')

const depths = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n')
  .map((x) => parseInt(x))

const rateOfIncrease = (depths) => {
  const isLarger = (a, b) => a > b
  return depths.reduce((value, depth, index) => {
    if (isLarger(depths[index + 1], depth)) {
      value++
    }
    return value
  }, 0)
}
console.log('rateOfIncrease', rateOfIncrease(depths)) // 1553

const rateOfSumOfIncrease = (depths) => {
  const sumOfThree = (a, b, c) => a + b + c

  const sumDepths = depths.map((firstDepth, index) => {
    if (index + 1 < depths.length) {
      return sumOfThree(firstDepth, depths[index + 1], depths[index + 2])
    }
  })
  return rateOfIncrease(sumDepths)
}
console.log('rateOfSumOfIncrease', rateOfSumOfIncrease(depths)) // 1597

module.exports = { rateOfIncrease, rateOfSumOfIncrease }
