const { readFileSync } = require('fs')

const list = readFileSync('./data.txt').toString().split('\n').map(i => parseInt(i))

var counter = 0
var position = 0

 do {
  console.log({ counter, position, val: list[position] })

  var nextPosition

  // do jump
  nextPosition = position + list[position]
  list[position] = list[position] + 1

  position = nextPosition

  counter++
} while (list[position] !== undefined)

console.log("result:", counter)