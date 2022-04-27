const { getHighestLetter, duplicatesExists, generateLetterValues, isMissingLetter, getFirstDigit } = require('./util');

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

	if (wrongCounts(romanNumber, values)) {
		return INCORRECT;
	}

	for (let i in romanNumber) {

		if (i == 0 && romanNumber.length == 1) return values[romanNumber[i]];

		if (values[romanNumber[i]] < values[romanNumber[parseInt(i) + 1]]) {
			if (sameNumbers) return INCORRECT;

			if (values[romanNumber[i]] <= values[romanNumber[parseInt(i) + 2]])
				return INCORRECT;

			let firstDigit = getFirstDigit(values[romanNumber[parseInt(i)]])

			if ( firstDigit == 5 ) return INCORRECT;

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

const wrongCounts = (romanNumber, values) => {
	let count = 0;
	let wrong = false;
	let romanLettersArr = romanNumber.split('')

	romanLettersArr.forEach((s, index) => {

		if((index + 1) === romanNumber.length && count == 3){

			let highestLetter = getHighestLetter(values)

			if( s != highestLetter ){
				wrong = true;	
			}
			
			return;
		}

		let firstDigit = getFirstDigit(values[s])

		if( firstDigit == 1 && count > 3){
			wrong = true;	
			return;
		}

		if( firstDigit == 5 && count > 1){
			wrong = true;	
			return;
		}

		if(s === romanLettersArr[index + 1]){
			count++;
		}else{
			count = 0;
		}
	})

	return wrong;
};

module.exports = { romanToNumber };