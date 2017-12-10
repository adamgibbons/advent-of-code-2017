const { readFileSync } = require('fs')
const list = readFileSync('./data.txt').toString().split('\n').map(i => parseInt(i))

function solvePart1 (rawList) {
  var list = rawList.concat([])
  var counter = 0
  var position = 0

  do {
    var nextPosition = position + list[position]

    list[position] = list[position] + 1

    position = nextPosition

    counter++
  } while (list[position] !== undefined)

  return counter
}

console.log(`Part 1: ${solvePart1(list)}`)