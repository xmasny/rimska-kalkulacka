const WRONG_INPUT = 'Wrong input';
const WRONG_NUMBER = 'Wrong number';

const convertToInt = require('./convertToInt');

const romanCalculator = (math) => {
  math = removeWhitespace(math);

  if (!checkFormat(math)) return WRONG_INPUT;

  const result = getResult(math);

  if (!result) return WRONG_NUMBER;

  if (result > 3999) return WRONG_NUMBER;

  return intToRoman(result);
};

const checkUnallowedCharacters = (math) => {
  if ((math.match(/[^+\-*/IVXLDCM]/g) || []).length > 0) {
    return true;
  }
  return false;
};

const checkFormat = (math) => {
  if (checkUnallowedCharacters(math)) {
    return false;
  }
  if ((math.match(/[+\-*/]/g) || []).length != 1) {
    return false;
  }
  return true;
};

const removeWhitespace = (math) => {
  math = math.replace(/\s+/g, '');
  return math;
};

const getOperator = (math) => {
  return math.match(/[+\-*/]/)[0];
};

const getNumbers = (math) => {
  let numbers = math.split(/[+\-*/]/);

  numbers[0] = convertToInt(numbers[0]);
  numbers[1] = convertToInt(numbers[1]);

  return numbers;
};

const makeOperation = (numbers, operator) => {
  const a = numbers[0];
  const b = numbers[1];

  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return isFloat(a / b);
};

const getResult = (math) => {
  const operator = getOperator(math);
  const numbers = getNumbers(math);
  return makeOperation(numbers, operator);
};

const isFloat = (result) => {
  const number = result % 1;

  if (number > 0 && number < 1) return false;

  return result;
};

const intToRoman = (num) => {
  let str = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let res = '';
  let i = 0;
  let tmp = 0;

  while (num > 0) {
    tmp = num % 10;
    if (tmp === 9) {
      res = str[i][0] + str[i + 1][0] + res;
    } else if (tmp >= 5) {
      res = str[i][1] + str[i][0].repeat(tmp - 5) + res;
    } else if (tmp === 4) {
      res = str[i][0] + str[i][1] + res;
    } else {
      res = str[i][0].repeat(tmp) + res;
    }
    num = Math.floor(num / 10);
    i++;
  }

  return res;
};

module.exports = {
  romanCalculator,
  removeWhitespace,
  checkFormat,
  getOperator,
  getNumbers,
  intToRoman,
  makeOperation,
  getResult,
};
