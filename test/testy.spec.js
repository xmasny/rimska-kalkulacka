let convertToInt = require('../convertToInt');
let {
  removeWhitespace,
  romanCalculator,
  getOperator,
  checkFormat,
  getNumbers,
  getResult,
  intToRoman,
} = require('../romanCalculator');
let chai = require('chai');

const { maxNumberFromRomanLetters } = require('../maxNumberFromRomanLetters');
const { romanToNumber } = require('../romanToNumber');

describe('rim to int test', () => {
  it("('')).to.be.equal(-9999)", (done) => {
    chai.expect(convertToInt('')).to.be.equal(-9999);
    done();
  });

  it("('I')).to.be.equal(1)", (done) => {
    chai.expect(convertToInt('I')).to.be.equal(1);
    done();
  });

  it("('IV')).to.be.equal(4)", (done) => {
    chai.expect(convertToInt('IV')).to.be.equal(4);
    done();
  });

  it("('IIV')) incorrect format, returning -9999", (done) => {
    chai.expect(convertToInt('IIV')).to.be.equal(-9999);
    done();
  });

  it("('MMMM')) value overflow, returning (-9999)", (done) => {
    chai.expect(convertToInt('MMMM')).to.be.equal(-9999);
    done();
  });

  it("('VIII')).to.be.equal(8)", (done) => {
    chai.expect(convertToInt('VIII')).to.be.equal(8);
    done();
  });

  it("('P')) incorrect character, returning -9999", (done) => {
    chai.expect(convertToInt('P')).to.be.equal(-9999);
    done();
  });

  it("('UL')) incorrect character with correct character, returning -9999", (done) => {
    chai.expect(convertToInt('UL')).to.be.equal(-9999);
    done();
  });

  it("('LO')) correct character with incorrect character, returning -9999", (done) => {
    chai.expect(convertToInt('LO')).to.be.equal(-9999);
    done();
  });

  it("('MMIV')).to.be.equal(2004)", (done) => {
    chai.expect(convertToInt('MMIV')).to.be.equal(2004);
    done();
  });

  it("('VIVI')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('VIVI')).to.be.equal(-9999);
    done();
  });

  it("('IVIV')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('IVIV')).to.be.equal(-9999);
    done();
  });

  it("('VIIII')) incorrect format, returning -9999", (done) => {
    chai.expect(convertToInt('VIIII')).to.be.equal(-9999);
    done();
  });

  it("('IXIV')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('IXIV')).to.be.equal(-9999);
    done();
  });

  it("('XCX')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('XCX')).to.be.equal(-9999);
    done();
  });

  it("('IXX')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('IXX')).to.be.equal(-9999);
    done();
  });

  it("('MCMM')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('MCMM')).to.be.equal(-9999);
    done();
  });

  it("('XCD')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('XCD')).to.be.equal(-9999);
    done();
  });

  it("('XXMM')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('XXMM')).to.be.equal(-9999);
    done();
  });

  it("('MCCCMI')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('MCCCMI')).to.be.equal(-9999);
    done();
  });

  it("('LC')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('LC')).to.be.equal(-9999);
    done();
  });

  it("('DM')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('DM')).to.be.equal(-9999);
    done();
  });

  it("('VL')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('VL')).to.be.equal(-9999);
    done();
  });

  it("('IM')) incorrect sequence, returning -9999", (done) => {
    chai.expect(convertToInt('IM')).to.be.equal(-9999);
    done();
  });

  it("('MMMCMXCIX')) correct number, returning 3999", (done) => {
    chai.expect(convertToInt('MMMCMXCIX')).to.be.equal(3999);
    done();
  });

  it("('LXXXIX')) correct number, returning 89", (done) => {
    chai.expect(convertToInt('LXXXIX')).to.be.equal(89);
    done();
  });

  it("('CXLV')) correct number, returning 145", (done) => {
    chai.expect(convertToInt('CXLV')).to.be.equal(145);
    done();
  });

  it("('MCDLXXXVIII')) correct number, returning 1488", (done) => {
    chai.expect(convertToInt('MCDLXXXVIII')).to.be.equal(1488);
    done();
  });
});

describe('test removeWhitespace', () => {
  it('removes whitespaces', (done) => {
    chai.expect(removeWhitespace('  XI * I X ')).to.be.equal('XI*IX');
    done();
  });

  it('does nothing', (done) => {
    chai.expect(removeWhitespace('XI*IX')).to.be.equal('XI*IX');
    done();
  });
});

describe('test formats', () => {
  it('test all correct operators', (done) => {
    chai.expect(checkFormat('XI*IX')).to.be.true;
    chai.expect(checkFormat('XI/IX')).to.be.true;
    chai.expect(checkFormat('XI+IX')).to.be.true;
    chai.expect(checkFormat('XI-IX')).to.be.true;
    done();
  });

  it('if has only one operator', (done) => {
    chai.expect(checkFormat('XI*/*IX')).to.be.false;
    done();
  });

  it('check incorrect format/s', (done) => {
    chai.expect(checkFormat('XI@IX')).to.be.false;
    chai.expect(checkFormat('XI@/IX')).to.be.false;
    chai.expect(checkFormat('XI*@/IX')).to.be.false;
    chai.expect(checkFormat('XI@&IX')).to.be.false;
    done();
  });

  it('gets correct operator', (done) => {
    chai.expect(getOperator('XI*IX')).to.be.equal('*');
    done();
  });
});

describe('test converting to int', () => {
  it('returns correct number from roman number', (done) => {
    chai.expect(intToRoman(11)).to.be.equal('XI');
    done();
  });
});

describe('test converting to int', () => {
  it('it is an array of length 2', (done) => {
    chai.expect(getNumbers('XI*IX')).to.be.an('array').to.have.lengthOf(2);
    done();
  });
});

describe('check result', () => {
  it('checking correct results', (done) => {
    chai.expect(getResult('XI+IX')).to.be.equal(20);
    chai.expect(getResult('XI*IX')).to.be.equal(99);
    chai.expect(getResult('XI-IX')).to.be.equal(2);
    chai.expect(getResult('XX/X')).to.be.equal(2);
    done();
  });

  it('check float result', (done) => {
    chai.expect(getResult('XI/IX')).to.be.false;
    done();
  });

  it('returns correct roman number', (done) => {
    chai.expect(romanCalculator('XI*IX')).to.be.equal('XCIX');
    done();
  });

  it('returns bigger number than 3999', (done) => {
    chai.expect(romanCalculator('MMM+M')).to.be.equal('Wrong number');
    done();
  });
});

describe('max number of:', () => {
  it('1 character is equal to 3', (done) => {
    chai.expect(maxNumberFromRomanLetters('1')).to.be.equal(3);
    done();
  });

  it('2 characters is equal to 8', (done) => {
    chai.expect(maxNumberFromRomanLetters('12')).to.be.equal(8);
    done();
  });

  it('3 characters is equal to 39', (done) => {
    chai.expect(maxNumberFromRomanLetters('123')).to.be.equal(39);
    done();
  });

  it('4 characters is equal to 89', (done) => {
    chai.expect(maxNumberFromRomanLetters('1234')).to.be.equal(89);
    done();
  });

  it('5 characters is equal to 399', (done) => {
    chai.expect(maxNumberFromRomanLetters('12345')).to.be.equal(399);
    done();
  });

  it('6 characters is equal to 899', (done) => {
    chai.expect(maxNumberFromRomanLetters('123456')).to.be.equal(899);
    done();
  });

  it('7 characters is equal to 3999', (done) => {
    chai.expect(maxNumberFromRomanLetters('1234567')).to.be.equal(3999);
    done();
  });

  it('8 characters is equal to 8999', (done) => {
    chai.expect(maxNumberFromRomanLetters('12345678')).to.be.equal(8999);
    done();
  });

  it('9 characters is equal to 39999', (done) => {
    chai.expect(maxNumberFromRomanLetters('123456789')).to.be.equal(39999);
    done();
  });

  it('10 characters is equal to 89999 with some whitespaces', (done) => {
    chai.expect(maxNumberFromRomanLetters('12 345 6789 A')).to.be.equal(89999);
    done();
  });
});

describe('incorrect inputs in function maxNumberFromRomanLetters():', () => {
  it('empty string returns -9999', (done) => {
    chai.expect(maxNumberFromRomanLetters('')).to.be.equal(-9999);
    done();
  });

  it('empty string with whitespaces returns -9999', (done) => {
    chai.expect(maxNumberFromRomanLetters('     ')).to.be.equal(-9999);
    done();
  });
});

describe('rom to number from alphabet test:', () => {
	it('VIII from alphabet IV', (done) => {
	  chai.expect(romanToNumber("IV", "VIII")).to.be.equal(8);
	  done();
	});

	it('AAA from alphabet A', (done) => {
		chai.expect(romanToNumber("A", "AAA")).to.be.equal(3);
		done();
	});

	it('number uses undefined letter', (done) => {
		chai.expect(romanToNumber("I", "IV")).to.be.equal(-9999);
		done();
	});

	it('LXXXIX from IVXL alphabet', (done) => {
		chai.expect(romanToNumber("IVXL", "LXXXIX")).to.be.equal(89);
		done();
	});

	it('QVA from alphabet IAVXLCQDM', (done) => {
		chai.expect(romanToNumber("IAVXLCQDM", "QVA")).to.be.equal(1015);
		done();
	});

	it('SSS from alphabet IVXLCDMPQRS', (done) => {
		chai.expect(romanToNumber("IVXLCDMPQRS", "SSS")).to.be.equal(300000);
		done();
	});

	it('VI from alphabet IVX', (done) => {
		chai.expect(romanToNumber("IVX", "VI")).to.be.equal(6);
		done();
	});

	it('IV from alphabet IVX', (done) => {
		chai.expect(romanToNumber("IVX", "IV")).to.be.equal(4);
		done();
	});

	it('MCDLXXXVIII from alphabet IVXLCDM', (done) => {
		chai.expect(romanToNumber("IVXLCDM", "MCDLXXXVIII")).to.be.equal(1488);
		done();
	});

	it('input empty', (done) => {
		chai.expect(romanToNumber("", "QVA")).to.be.equal(-9999);
		done();
	});

	it('incorrect input chars (whitespace)', (done) => {
		chai.expect(romanToNumber("  ", "QVA")).to.be.equal(-9999);
		done();
	});

	it('incorrect input chars $A', (done) => {
		chai.expect(romanToNumber("$A", "QVA")).to.be.equal(-9999);
		done();
	});

	it('empty number to convert', (done) => {
		chai.expect(romanToNumber("I", "")).to.be.equal(-9999);
		done();
	});

	it('cant be 5* before 1* number', (done) => {
		chai.expect(romanToNumber("IVXL", "VIVI")).to.be.equal(-9999);
		done();
	});

	
})