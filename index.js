const convertToInt = require('./convertToInt');
const { romanCalculator, intToRoman } = require('./romanCalculator');
const { maxNumberFromRomanLetters } = require('./maxNumberFromRomanLetters');

console.log(maxNumberFromRomanLetters('1'));
console.log(maxNumberFromRomanLetters('12'));
console.log(maxNumberFromRomanLetters('123'));
console.log(maxNumberFromRomanLetters('1234'));
console.log(maxNumberFromRomanLetters('12345'));
console.log(maxNumberFromRomanLetters('123456'));
console.log(maxNumberFromRomanLetters('1234567'));
console.log(maxNumberFromRomanLetters('12345678'));
console.log(maxNumberFromRomanLetters('123456789'));
console.log(maxNumberFromRomanLetters('123456789A'));
