const { removeWhitespace } = require('./romanCalculator');
const { findDuplicates, generateLetterValues, checkFirstDigitOfLastLetter } = require('./util');

const INCORRECT = -9999;

const maxNumberFromRomanLetters = (romanLetters) => {
  romanLetters = removeWhitespace(romanLetters);

  if (!checkFormat(romanLetters)) {
    return INCORRECT;
  }

  const letterValues = generateLetterValues(romanLetters);

  return countMaxValue(letterValues);
};

const checkFormat = (romanLetters) => {
  if (romanLetters === '') {
    return false;
  }

  romanLetters = [...romanLetters];

  if (findDuplicates(romanLetters).length !== 0) {
    return false;
  }

  return true;
};

const countMaxValue = (letterValues) => {
  let result = 0;
  let position = 0;

  letterValues.reverse();

  if (checkFirstDigitOfLastLetter(position, letterValues) == 1) {
    result = calculateNextValues(result, letterValues, position);
  } else if (checkFirstDigitOfLastLetter(position, letterValues) == 5) {
    result += letterValues[position];
    position++;

    result = calculateNextValues(result, letterValues, position);
  }

  return result;
};

const calculateNextValues = (result, letterValues, position) => {
  for (let i = 0; i < 3; i++) {
    result += letterValues[position];
  }

  while (letterValues[position + 2] != undefined) {
    result = result + (letterValues[position] - letterValues[position + 2]);
    position += 2;
  }

  return result;
};

module.exports = { maxNumberFromRomanLetters };
