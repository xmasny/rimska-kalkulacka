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

}
