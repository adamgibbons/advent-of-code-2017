const { readFileSync } = require('fs')

const phrases = readFileSync('./data.txt')
  .toString()
  .split("\n")
  .map(line => line.split(" "))

function rest(list, position) {
  return list.slice(position + 1)
}

const validPhrases = phrases.map((phrase) => {
  return phrase.reduce((accumulator, currentValue, position, subject) => {

    if (rest(subject, position).length === 0) { return accumulator }

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
}).filter(words => words.length === 0)

console.log(validPhrases.length)

