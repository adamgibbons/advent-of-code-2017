const { readFileSync } = require('fs')

const phrases = readFileSync('./data.txt')
  .toString()
  .split("\n")
  .map(line => line.split(" "))

function rest(list, position) {
  return list.slice(position + 1)
}

function solvePartOne(phrases) {
  return phrases.map((phrase) => {
    return phrase.reduce((accumulator, currentValue, position, subject) => {
      if (rest(subject, position).length === 0) return accumulator

      if (rest(subject, position).indexOf(currentValue) !== -1) {
        const idx = rest(subject, position).indexOf(currentValue)
        const matchedWord = rest(subject, position)[idx]
        if (matchedWord.length === currentValue.length) {
          accumulator.push(currentValue)
          return accumulator
        }
      }

      return accumulator
    }, [])
  }).filter(words => words.length === 0).length
}

function solvePartTwo(phrases) {
  return phrases.map((phrase) => {
    return phrase
      .map((words) => {
        return words.split("").sort().join("")
      })
      .reduce((accumulator, currentValue, position, subject) => {
        if (rest(subject, position).length === 0) return accumulator

        if (rest(subject, position).indexOf(currentValue) !== -1) {
          const idx = rest(subject, position).indexOf(currentValue)
          const matchedWord = rest(subject, position)[idx]
          if (matchedWord.length === currentValue.length) {
            accumulator.push(currentValue)
            return accumulator
          }
        }

        return accumulator
      }, [])
  }).filter(line => line.length === 0).length
}

console.log(solvePartOne(phrases))
console.log(solvePartTwo(phrases))