// elements
const password = document.querySelector('#password');
const button = document.querySelector('#generate');

const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91,96)
).concat(    
    arrayFromLowToHigh(123,126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked


    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){

    }
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let CharCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    

}
   function arrayFromLowToHigh(low,high) {
       const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
       }
       return array 
   }
   

function syncCharacterAmount(e) {
    const value = e.target.value 
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

