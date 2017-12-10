const { readFileSync } = require('fs')
const rawList = readFileSync('./test-data.txt').toString().split('\n').map(i => parseInt(i))

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

function solvePart2(rawList) {
  var list = rawList.concat([])
  var counter = 0
  var position = 0

  do {

    console.log(list)

    var nextPosition = position + list[position]
    var offset = Math.abs(position - list[position])

    if (offset > 2)  {
      list[position] = list[position] - 1
    } else {
      list[position] = list[position] + 1
    }

    // var nextPosition = position + list[position]
    position = nextPosition

    counter++
    // console.log(position)
  } while (list[position] !== undefined)

  return counter
}

// console.log(`Part 1: ${solvePart1(list)}`)
console.log(`Part 2: ${solvePart2(rawList)}`)
