const fs = require('fs')

const binaryList = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n')

const findCommonDenominator = (binaryList) => {
  let totals = [0, 0, 0, 0, 0] //change this for length of line.. why doesn't push() work?
  binaryList.forEach((binaryLine) => {
    binaryLine.split('').forEach((num, index) => {
      totals[index] += parseInt(num)
    })
  })
  return totals
}
const findConsumptionRate = (binaryList) => {
  const totals = findCommonDenominator(binaryList)
  const middle = binaryList.length / 2
  const gammas = totals
    .map((x) => {
      return x > middle ? 1 : 0
    })
    .join('')
  const epsilons = totals
    .map((x) => {
      return x > middle ? 0 : 1
    })
    .join('')

  return parseInt(gammas, 2) * parseInt(epsilons, 2)
}
console.log(findConsumptionRate(binaryList)) //2648450

// part 2

const findCommonDenominatorAtIndex = (list, index) => {
  return findCommonDenominator(list)[index]
}

const findLifeSupportRating = (binaryList) => {
  let totalAtIndex
  const lineLength = binaryList[1].length
  let oxygen = []
  let oxyList = binaryList
  let co2List = binaryList
  let i = 0
  for (i; i < lineLength; i++) {
    if (oxyList.length === 1) {
      break
    }
    let middle = oxyList.length / 2
    totalAtIndex = findCommonDenominatorAtIndex(oxyList, i)
    const binaryAtIndex = totalAtIndex >= middle ? 1 : 0
    oxygen = oxyList.filter((line) => {
      return line.split('')[i] == binaryAtIndex
    })
    oxyList = oxygen
  }

  let co2 = []
  for (let index = 0; index < lineLength; index++) {
    if (co2List.length === 1) {
      break
    }
    let middle = co2List.length / 2
    totalAtIndex = findCommonDenominatorAtIndex(co2List, index)
    const binaryAtIndex = totalAtIndex >= middle ? 0 : 1
    co2 = co2List.filter((line) => {
      return line.split('')[index] == binaryAtIndex
    })
    co2List = co2
  }
  return parseInt(oxygen[0], 2) * parseInt(co2[0], 2)
}
console.log(findLifeSupportRating(binaryList)) // 2845944
module.exports = { findConsumptionRate, findLifeSupportRating }
