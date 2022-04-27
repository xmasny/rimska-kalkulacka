const { getFirstDigit } = require('./util');

const values = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
  };
  
  const INCORRECT = -9999;
  
  const convertToInt = (romanNumber) => {
	let result = 0;
	let sameNumbers = false;
  
	if (romanNumber.length === 0) return INCORRECT;
  
	if (wrongCounts(romanNumber)) {
	  return INCORRECT;
	}
  
	if (romanNumber.match(/^[IVXLCDM]+$/)) {
	  for (let i in romanNumber) {
		if (i == 0 && romanNumber.length == 1) return values[romanNumber[i]];
  
		if (values[romanNumber[i]] < values[romanNumber[parseInt(i) + 1]]) {
		  if (sameNumbers) return INCORRECT;
  
		  if (values[romanNumber[i]] <= values[romanNumber[parseInt(i) + 2]])
			return INCORRECT;
  
		  if (romanNumber[i].match(/[VLD]/)) return INCORRECT;
  
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
		if (result > 3999) return INCORRECT;
	  }
	  return result;
	} else return INCORRECT;
  };
  
  const wrongCounts = (romanNumber) => {
	let romanLettersArr = romanNumber.split('')
	let count = 0;
	let wrong = false;
  
	romanLettersArr.forEach((s, index) => {

		if((index + 1) === romanNumber.length && count == 3){

			let lastLetter = Object.keys(values)[Object.keys(values).length - 1]

			if( s != lastLetter ) wrong = true;
			
			return;
		}

		let firstDigit = getFirstDigit(values[s])

		if( firstDigit == 1 && count > 3 ){
			wrong = true;	
			return;
		}

		if( firstDigit == 5 && count > 1 ){
			wrong = true;	
			return;
		}

		if(s === romanLettersArr[index + 1]){
			count++;
		}else{
			count = 0;
		}
	});
  
	return wrong;
  };
  
  module.exports = convertToInt;