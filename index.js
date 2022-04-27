const convertToInt = require('./convertToInt');
const { romanCalculator, intToRoman } = require('./romanCalculator');
const { maxNumberFromRomanLetters } = require('./maxNumberFromRomanLetters');
const { romanToNumber } = require('./romanToNumber');

console.log(romanToNumber("IV", "VIII"))
console.log(romanToNumber("A", "AAA"))
console.log(romanToNumber("I", "IV"))
console.log(romanToNumber("IVXL", "LXXXIX"))
console.log(romanToNumber("IAVXLCQDM", "QVA"))
console.log(romanToNumber("IVXLCDMPQRS", "SSS"))
console.log(romanToNumber("", "IV"))
console.log(romanToNumber("IVXLX", "IV"))

/*console.log(maxNumberFromRomanLetters('1'));
console.log(maxNumberFromRomanLetters('12'));
console.log(maxNumberFromRomanLetters('123'));
console.log(maxNumberFromRomanLetters('1234'));
console.log(maxNumberFromRomanLetters('12345'));
console.log(maxNumberFromRomanLetters('123456'));
console.log(maxNumberFromRomanLetters('1234567'));
console.log(maxNumberFromRomanLetters('12345678'));
console.log(maxNumberFromRomanLetters('123456789'));
console.log(maxNumberFromRomanLetters('123456789A'));*/
