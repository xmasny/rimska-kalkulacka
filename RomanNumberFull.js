export default class RomanNumberFull {

    constructor(romanLetters){    
        this.value = 0; 

        if(romanLetters === undefined){
            romanLetters = "OIVXLCDM";
        }
        this.setRomanLetters(romanLetters)
    }

    romanLetters(){
        return this.romanLetters;
    }

    setValue(value){
        let maxValue = this.maximum();

        if( (value > 1 && value <= maxValue) || (value < -1 && value >= -Math.abs(maxValue)) ){
            this.value = value;
            return true;
        }

        return false;
    }

    maximum(){
        let letterValues = this.generateLetterValues(this.romanLetters);

        return this.countMaxValue(letterValues);
    }

    minimum(){
        let letterValues = this.generateLetterValues(this.romanLetters);

        let maxValue = this.countMaxValue(letterValues);

        return -Math.abs(maxValue)
    }

    getValue(){
        return this.value;
    }

    setRomanNumber(romanNumber){
        romanNumber = this.removeWhitespace(romanNumber);
        
        if(romanNumber.length === 0){
            return false
        }

        for(let romanLetter of romanNumber){
            if( !this.romanLetters.includes(romanLetter)){
                return false;
            }
        }  

        let values = {}

        const romanValues = this.generateLetterValues(romanNumber);
        
        this.romanLetters.split('').forEach(function(romanLetter, index) {
            values[romanLetter] = romanValues[index];
        })

        if (this.wrongCounts(romanNumber, values)) {
            return false;
        }

        let result = this.romanToNumber(romanNumber)

        if(result === false){
            return false
        }

        let maxNum = this.maximum()

        if (result > maxNum || result < -Math.abs(maxNum)){
            return false;
        }

        this.value = result;

        return true;
    }

    setRomanLetters(romanLetters){
        romanLetters = this.removeWhitespace(romanLetters);
        
        if(romanLetters.length < 2){
            romanLetters = "OIVXLCDM"
        }
        
        if(this.duplicatesExists(romanLetters)){
            romanLetters = "OIVXLCDM"
        }

        this.romanLetters = romanLetters;
    }

    removeWrongChars(romanLetters){
        let romanLettersClean = "";

        for (let letter of romanLetters) {
            if(letter.match(/^[OIVXLCDM]+$/)){
                romanLettersClean += letter;
            }
        }

        return romanLettersClean;
    }

    duplicatesExists = (romanLetters) => {
        let checked = [];
        let duplicate = false;
    
        romanLetters.split('').forEach((s) => {
            if(checked.includes(s)) {
                duplicate = true;
                return;
            };
    
            checked.push(s);
        })
    
        return duplicate;
    }    

    countMaxValue = (letterValues) => {
        let result = 0;
        let position = 0;
      
        letterValues.reverse();
      
        if (this.checkFirstDigitOfLastLetter(position, letterValues) == 1) {
          result = this.calculateNextValues(result, letterValues, position);
        } else if (this.checkFirstDigitOfLastLetter(position, letterValues) == 5) {
          result += letterValues[position];
          position++;
      
          result = this.calculateNextValues(result, letterValues, position);
        }
      
        return result;
    };

    checkFirstDigitOfLastLetter = (position, letterValues) => {
        return String(letterValues[position]).charAt(0);
    };

    calculateNextValues = (result, letterValues, position) => {
        for (let i = 0; i < 3; i++) {
          result += letterValues[position];
        }
      
        while (letterValues[position + 2] != undefined) {
          result = result + (letterValues[position] - letterValues[position + 2]);
          position += 2;
        }
      
        return result;
    };

    generateLetterValues = (romanLetters) => {
        const letterValues = [];
        let multiplier = 1;
      
        for (let i in romanLetters) {
          if(i == 0){
            letterValues[i] = 0;
          } else if ( (i - 1) % 2 == 0) {
            letterValues[i] = 1 * multiplier;
          } else {
            letterValues[i] = 5 * multiplier;
            multiplier *= 10;
          }
        }
        return letterValues;
    }

    removeWhitespace = (math) => {
        math = math.replace(/\s+/g, '');
        return math;
    }

    wrongCounts(romanLetters, values){
        let count = 0;
		let counts = {};
	    let wrong = false;
        let romanLettersArr = romanLetters.split('');

        romanLettersArr.forEach((s, index) => {

            if((index + 1) === romanLetters.length && count == 3){
    
                let highestLetter = this.getHighestLetter(values)
    
                if( s != highestLetter ){
                    wrong = true;	
                }
                
                return;
            }
    
            let firstDigit = parseInt(this.getFirstDigit(values[s]))

			if(romanLettersArr[s + 1] != undefined && romanLettersArr[s] != romanLettersArr[s + 1]){
				for (let index = s+1; index < romanLettersArr.length; index++) {
					if(romanLettersArr[index] == romanLettersArr[s]){
						wrong = false;
						return;
					}
					
				}
			}
    
            if( firstDigit == 1 && count > 3){
                wrong = true;	
                return;
            }
    
            if( firstDigit == 5 && count >= 1){
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
    }

    getFirstDigit = (num) => {
        return String(num)[0];
    }

    romanToNumber(romanNumber){
        let values = {}
        let result = 0;
        let sameNumbers = false;

        let romanValues = this.generateLetterValues(this.romanLetters);

        this.romanLetters.split('').forEach(function(romanLetter, index) {
            values[romanLetter] = romanValues[index];
        })

        for (let i in romanNumber) {

            if (i == 0 && romanNumber.length == 1) return values[romanNumber[i]];
    
            if (values[romanNumber[i]] < values[romanNumber[parseInt(i) + 1]]) {
                if (sameNumbers) return false;
    
                if (values[romanNumber[i]] <= values[romanNumber[parseInt(i) + 2]])
                    return false;
    
                let firstDigit = this.getFirstDigit(values[romanNumber[parseInt(i)]])
    
                if ( firstDigit == 5 ) return false;
    
                if (values[romanNumber[i]] * 10 < values[romanNumber[parseInt(i) + 1]])
                    return false;
    
                result -= values[romanNumber[i]];
                sameNumbers = false;
            } else {
                if (values[romanNumber[i]] == values[romanNumber[parseInt(i) + 1]])
                    sameNumbers = true;
                else sameNumbers = false;
    
                result += values[romanNumber[i]];
            }
        }

        return result
    }

    intToRoman = (num, romanLetters) => {

		romanLetters = romanLetters.substring(1);

		let str = []
		let buffer = []

		for(let romanLetterIndex in romanLetters){
			buffer.push(romanLetters[romanLetterIndex]);

			if(romanLetterIndex % 2 == 1){
				str.push(buffer);
				buffer = [];
			}
		}

		if(buffer.length){
			str.push(buffer);
		}

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

	calculator(expression){
		expression = this.removeWhitespace(expression);

		if(!this.checkFormat(expression)){
			return false;
		}

		let result = this.getResult(expression);

		if(result == false){
			return false;
		}

		this.value = result;

		return true;
	}

	getResult = (math) => {
		const operator = this.getOperator(math);
		const numbers = this.getNumbers(math);

		if(numbers === false){
			return false;
		}

		return this.makeOperation(numbers, operator);
	};

	makeOperation = (numbers, operator) => {
		const a = numbers[0];
		const b = numbers[1];		
	  
		if (operator === '+') return a + b;
		if (operator === '-') return a - b;
		if (operator === '*') return a * b;
		if (operator === '/') return this.isFloat(a / b);
	};

	isFloat = (result) => {
		const number = result % 1;
	  
		if (number > 0 && number < 1) return Math.floor(result);
	  
		return result;
	}

	getOperator = (math) => {
		return math.match(/[+\-*/]/)[0];
	};

	getNumbers = (math) => {
		let numbers = math.split(/[+\-*/]/);

		let values = {}

		const romanValues = this.generateLetterValues(this.romanLetters);
        
        this.romanLetters.split('').forEach(function(romanLetter, index) {
            values[romanLetter] = romanValues[index];
        })

        if (this.wrongCounts(numbers[0], values)) {
            return false;
        }

		if (this.wrongCounts(numbers[1], values)) {
            return false;
        }
	
		numbers[0] = this.romanToNumber(numbers[0]);
		numbers[1] = this.romanToNumber(numbers[1]);
	
		return numbers;
	};

	checkFormat = (math) => {

		if ((math.match(/[+\-*/]/g) || []).length != 1) {
		  return false;
		}

		return true;
	};
	  

    getRomanNumber(){
        let negative = false

        if(this.value == 0){
            return 'O';
        }
        
        if(this.value < 0){
            negative = true
        }

        let values = {}
        let romanValues = this.generateLetterValues(this.romanLetters);

        this.romanLetters.split('').forEach(function(romanLetter, index) {
            values[romanLetter] = romanValues[index];
        })

        let result = this.intToRoman(Math.abs(this.value), this.romanLetters)

        if(negative){
            result = "-" + result;
        }

        return result
    }

}
