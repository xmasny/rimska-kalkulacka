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
  
	if (!characterQuantity(romanNumber)) {
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
  
  const characterQuantity = (romanNumber) => {
	let count = {
	  I: 0,
	  V: 0,
	  X: 0,
	  L: 0,
	  C: 0,
	  D: 0,
	  M: 0,
	};
  
	romanNumber.split('').forEach((s) => {
	  count[s] ? count[s]++ : (count[s] = 1);
	});
  
	if ((count.I || count.X || count.C) > 3) return false;
	if ((count.V || count.D || count.L) > 1) return false;
	if (count.M > 4) return false;
  
	return true;
  };
  
  module.exports = convertToInt;