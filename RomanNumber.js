export default class RomanNumber {

    constructor(romanLetters){    
        this.value = 0;   
        if(romanLetters === undefined){
            romanLetters = "IVXLCDM";
        }
        
        this.setRomanValues()
        this.setRomanLetters(romanLetters)
    }

    romanLetters(){
        return this.romanLetters;
    }    

    setValue(value){
        

        let maxValue = this.maxNumber();

        if( value > 0 && value <= maxValue ){
            this.value = value;
            return true;
        }

        return false;
    }

    maxNumber(){
        let letterValues = this.generateLetterValues(this.romanLetters);

        return this.countMaxValue(letterValues);
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

        let result = romanToNumber(romanNumber)

        if(result instanceof Boolean){
            return false
        }

        return result;

    }

    setRomanLetters(romanLetters){
        romanLetters = this.removeWhitespace(romanLetters);
        
        if(romanLetters.length === 0){
            romanLetters = "IVXLCDM"
        }
        if(this.duplicatesExists(romanLetters)){
            romanLetters = "IVXLCDM"
        }

        this.romanLetters = romanLetters;
    }

    removeWrongChars(romanLetters){
        let romanLettersClean = "";

        for (let letter of romanLetters) {
            if(letter.match(/^[IVXLCDM]+$/)){
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
          if (i % 2 == 0) {
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

    /*removeWrongCounts(romanLetters){
        let romanLettersClean = "";
        let count = 0;
	    let wrong = false;

        let romanLettersArr = romanLetters.split('');

        romanLettersArr.forEach((s, index) => {

            if((index + 1) === romanLetters.length && count == 3){
    
                let highestLetter = this.getHighestLetter(this.values)
    
                if( s != highestLetter ){
                    wrong = true;	
                }

                if( !wrong ){ romanLettersClean += s; }
                
                return;
            }
    
            let firstDigit = this.getFirstDigit(this.values[s])
    
            if( firstDigit == 1 && count > 3){
                wrong = true;	
                return;
            }
    
            if( firstDigit == 5 && count > 1){
                wrong = true;	
                return;
            }

            if( !wrong ){ romanLettersClean += s; }
    
            if(s === romanLettersArr[index + 1]){
                count++;
            }else{
                count = 0;
            }
        })

        return romanLettersClean;
    }*/

    getFirstDigit = (num) => {
        return String(num)[0];
    }

    getHighestLetter = (values) => {
        let highestLetter = ''
        let highestValue = 0
    
        for (const [letter, value] of Object.entries(values)) {
            if (value > highestValue){
                highestValue = value;
                highestLetter = letter;
            }
        }
    
        return highestLetter;
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
}
