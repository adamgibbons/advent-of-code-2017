const { readFileSync } = require('fs')

const massagedInput = readFileSync('./data.csv')
  .toString()
  .split("\n")
  .map(row => row.split("\t")
    .map(i => parseInt(i)))

function solvePartOne (data) {
  return data.map((row) => {
    return Math.max(...row) - Math.min(...row)
  }).reduce((a, b) => { return a + b })
}

function solvePartTwo (data) {
  return data.map((row) => {
    return row.sort((b, a) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    }).reduce((accumulator, currentValue, idx, subject) => {
      const result = (subject.slice(idx + 1).find((i) => currentValue % i === 0))

      if (result) {
        accumulator += (currentValue / result)
        return accumulator
      }

      return accumulator
    }, 0)
  }).reduce((a, b) => a + b)
}

function solve (data) {
  console.log("Part One: ", solvePartOne(data))
  console.log("Part Two: ", solvePartTwo(data))
}

solve(massagedInput)