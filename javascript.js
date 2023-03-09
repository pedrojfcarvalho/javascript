function add7(number) {
    return number + 7
}

function multiply(number1, number2) {
    return number1 * number2
}

function capitalize(word) {
    const wordLowerCase = word.toLowerCase()
    const firstLetter = wordLowerCase.charAt(0)
    const firstLetterUpperCase = firstLetter.toUpperCase()
    const remainingLetters = wordLowerCase.slice(1)

    return firstLetterUpperCase + remainingLetters
}

function lastLetter(word) {
    const lastPosition = word.lastIndexOf()
    const lastLetter = word.slice(lastPosition)

    return lastLetter
}

console.log(add7(7))
console.log(multiply(7, 2))
console.log(capitalize('HEROI'))
console.log(lastLetter('gata'))