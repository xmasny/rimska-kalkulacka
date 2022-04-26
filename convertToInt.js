const romanValues = [
	1,
	5,
	10,
	50,
	100,
	500,
	1000,
	5000,
	10000,
	50000,
	100000,
  ];
  
  const INCORRECT = -9999;
  
  const convertToInt = (romanLetters, romanNumber) => {
	let result = 0;
	let values = {}
	let sameNumbers = false;
  
	if (romanNumber.length === 0) return INCORRECT;
  
	if (!romanNumber.match(/^[A-Z]+$/)) return INCORRECT;
  
	romanLetters.split('').forEach(function(romanLetter, index) {
	  if (values.hasOwnProperty(romanLetter)) return INCORRECT;
  
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
  
		//if (romanNumber[i].match(/[VLD]/)) return INCORRECT;
  
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
  
  
  const isMissingLetter = (romanNumber, values) => {
	let missingLetter = false
  
	romanNumber.split('').forEach((s) => {
	  if (!values.hasOwnProperty(s)) {
		return missingLetter = true
	  }
	})
  
	return missingLetter
  }
  
  const characterQuantity = (romanNumber, values) => {
  
	let romanValues = {
	  1: 0,
	  5: 0,
	  10: 0,
	  50: 0,
	  100: 0,
	  500: 0,
	  1000: 0,
	  5000: 0,
	  10000: 0,
	  50000: 0,
	  100000: 0,
	};
  
	romanNumber.split('').forEach((s) => {
  
	  Object.entries(values).forEach(function(entry) {
		const [letter, value] = entry;
  
		if (letter === s) {
		  romanValues[value] += 1
		}
	  })
	})
  
	if ((romanValues[1] || romanValues[10] || romanValues[100] || romanValues[10000] || romanValues[100000]) > 3) return false;
	if ((romanValues[5] || romanValues[50] || romanValues[500] || romanValues[5000] || romanValues[50000]) > 1) return false;
	if (romanValues[1000] > 4) return false;
  
	return true;
  };
  
  module.exports = convertToInt;