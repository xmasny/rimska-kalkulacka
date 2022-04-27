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

const findDuplicates = (romanLetters) => {
  return romanLetters.filter(
    (item, index) => romanLetters.indexOf(item) != index
  );
};

const duplicatesExists = (str) => {
	let checked = [];
	let duplicate = false;

	str.split('').forEach((s) => {
		if(checked.includes(s)) {
			duplicate = true;
			return;
		};

		checked.push(s);
	})

	return duplicate;
}

const checkFirstDigitOfLastLetter = (position, letterValues) => {
  return String(letterValues[position]).charAt(0);
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

const getFirstDigit = (num) => {
	return String(num)[0];
}

module.exports = {
  	generateLetterValues,
	findDuplicates,
	checkFirstDigitOfLastLetter,
	isMissingLetter,
	getFirstDigit,
	duplicatesExists,
};
