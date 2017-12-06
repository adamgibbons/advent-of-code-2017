// part 1

const fs = require('fs')

const result = fs.readFileSync('./data.csv')
  .toString()
  .split("\n")
  .map(row => row.split("\t")
    .map(i => parseInt(i)))
  .map((row) => {
    return Math.max(...row) - Math.min(...row)
  })
  .reduce((a, b) => {
    return a + b
  })

console.log(result)
