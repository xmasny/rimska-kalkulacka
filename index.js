const convertToInt = require('./convertToInt');
const { romanCalculator, intToRoman } = require('./romanCalculator');

console.log(convertToInt("IV", "VIII"))
console.log(convertToInt("A", "AAA"))
console.log(convertToInt("I", "IV"))
console.log(convertToInt("IVXL", "LXXXIX"))
console.log(convertToInt("IAVXLCQDM", "QVA"))
console.log(convertToInt("IVXLCDMPQRS", "SSS"))
console.log(convertToInt("", "IV"))
console.log(convertToInt("IVXLX", "IV"))
