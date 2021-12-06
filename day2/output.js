const fs = require('fs')

const instructionList = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n')

const depthByDistance = (instructionList) => {
  let depth = 0
  let distance = 0

  instructionList.forEach((instruction) => {
    const [dir, dist] = instruction.split(' ')
    if (dir === 'up') {
      depth -= parseInt(dist)
    }
    if (dir === 'down') {
      depth += parseInt(dist)
    }
    if (dir === 'forward') {
      distance += parseInt(dist)
    }
  })
  return distance * depth
}

const depthByDistanceAndAim = (instructionList) => {
  let aim = 0
  let distance = 0
  let depth = 0

  instructionList.forEach((instruction) => {
    const [dir, dist] = instruction.split(' ')
    if (dir === 'up') {
      aim -= parseInt(dist)
    }
    if (dir === 'down') {
      aim += parseInt(dist)
    }
    if (dir === 'forward') {
      distance += parseInt(dist)
      depth += dist * aim
    }
  })
  return distance * depth
}

// console.log(depthByDistance(instructionList)) //1728414
// console.log(depthByDistanceAndAim(instructionList)) // 1765720035

module.exports = { depthByDistance, depthByDistanceAndAim }
