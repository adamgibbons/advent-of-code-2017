const { readFileSync } = require('fs')

const list = readFileSync('./data.txt').toString().split('\n').map(i => parseInt(i))

console.log(jump(list, 0, 0))

function jump(list, position, counter) {

  if (typeof list[position] !== 'number') return counter

  list.splice(position, 1, list[position] + 1)

  return jump(list, position + list[position], counter + 1)
}

