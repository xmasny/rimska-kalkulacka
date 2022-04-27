const { duplicatesExists, generateLetterValues, isMissingLetter, getFirstDigit } = require('./util');

const INCORRECT = -9999;

const romanToNumber = (romanLetters, romanNumber) => {
	let result = 0;
	let values = {}
	let sameNumbers = false;

	const romanValues = generateLetterValues(romanLetters);

	if (romanNumber.length === 0) return INCORRECT;

	if (!romanNumber.match(/^[A-Z]+$/)) return INCORRECT;

	if( duplicatesExists(romanLetters) ) return INCORRECT;

	romanLetters.split('').forEach(function(romanLetter, index) {
		values[romanLetter] = romanValues[index];
	})

	if (isMissingLetter(romanNumber, values)) {
		return INCORRECT;
	}

	if (!characterQuantity(romanNumber, values)) {
		return INCORRECT;
	}

	for (let i in romanNumber) {
		if (i == 0 && romanNumber.length == 1) return values[romanNumber[i]];

		if (values[romanNumber[i]] < values[romanNumber[parseInt(i) + 1]]) {
			if (sameNumbers) return INCORRECT;

			if (values[romanNumber[i]] <= values[romanNumber[parseInt(i) + 2]])
				return INCORRECT;

			if ( (parseInt(i) + 1) != romanNumber.length && getFirstDigit(values[romanNumber[parseInt(i)]]) === 5 ){
				if(values[romanNumber[parseInt(i) + 1]] == 1) return INCORRECT;
			}

			if (values[romanNumber[i]] * 10 < values[romanNumber[parseInt(i) + 1]])
				return INCORRECT;

			result -= values[romanNumber[i]];
			sameNumbers = false;
		} else {
			if (values[romanNumber[i]] == values[romanNumber[parseInt(i) + 1]])
				sameNumbers = true;
			else sameNumbers = false;

			result += values[romanNumber[i]];
		}
	}
	return result;
};

const characterQuantity = (romanNumber, values) => {
	let romanValues = {};

	Object.values(values).forEach(function(value) {
		romanValues[value] = 0;
	})

	romanNumber.split('').forEach((s) => {
		Object.entries(values).forEach(function(entry) {
			const [letter, value] = entry;

			if (letter === s) {
				romanValues[value] += 1
			}
		})
	})

	Object.entries(romanValues).forEach(function(entry, index) {
		const [romanValue, romanLetterCount] = entry

		if((index + 1) === values.length){
			if(romanLetterCount > 4) return false;

			return true;
		}

		let firstDigit = getFirstDigit(romanValue)

		if(firstDigit === 1  && romanLetterCount > 3) return false;
		
		if(firstDigit === 5 && romanLetterCount > 1) return false;
	})
	
	return true;
};

module.exports = { romanToNumber };