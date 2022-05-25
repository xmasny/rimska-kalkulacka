export default class RomanNumber{

    constructor(romanLetters){
        this.setRomanValues()
        this.setRomanLetters(romanLetters)
    }

    romanLetters(){
        return this.romanLetters;
    }

    setRomanValues(){
        this.values = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
    }

    setRomanLetters(romanLetters){
        romanLetters = this.removeWrongChars(romanLetters)
        romanLetters = this.removeDuplicates(romanLetters)
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

    removeDuplicates(romanLetters){
        return romanLetters
            .split('')
            .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
            })
            .join('');        
    }

    removeWrongCounts(romanLetters){
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
    }

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

}