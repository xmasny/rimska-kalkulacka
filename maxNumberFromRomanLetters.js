const { removeWhitespace } = require('./romanCalculator');

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

const findDuplicates = (romanLetters) => {
  return romanLetters.filter(
    (item, index) => romanLetters.indexOf(item) != index
  );
};

const generateLetterValues = (romanLetters) => {
  const letterValues = [];
  let multiplier = 1;

  for (let i in romanLetters) {
    if (i % 2 == 0) {
      letterValues[i] = 1 * multiplier;
    } else {
      letterValues[i] = 5 * multiplier;
      multiplier *= 10;
    }
  }
  return letterValues;
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

const checkFirstDigitOfLastLetter = (position, letterValues) => {
  return String(letterValues[position]).charAt(0);
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
