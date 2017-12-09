const { readFileSync } = require('fs')

const data = readFileSync('./data.txt')
  .toString().split("\n")
  .filter((line) => {
    if (line.indexOf('->') > -1) return true
    return false
  })
  .map((row) => {
    return { bottom, tops } = processRow(row)

    function processRow(row) {
      const bottom = row.split(' ')[0]
      const tops = row.split(' ').slice(3).map(i=>i.replace(',', ''))

      return { bottom, tops }
    }
  }).reduce((accumulator, currentValue, idx, subj) => {
    accumulator.bottoms.push(currentValue.bottom)
    accumulator.tops = accumulator.tops.concat(currentValue.tops)
    return accumulator
  }, {bottoms: [], tops: []})

const result = data.bottoms.reduce((accumulator, currentValue, idx, subject) =>  {
  if (data.tops.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
    return accumulator
  }
  return accumulator
}, [])

console.log("Part one:", result[0])
