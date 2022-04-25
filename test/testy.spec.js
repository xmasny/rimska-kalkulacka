let convertToInt = require('../convertToInt');
let {
  removeWhitespace,
  romanCalculator,
  getOpereator,
  checkFormat,
  getNumbers,
  getResult,
  intToRoman,
} = require('../romanCalculator');
let chai = require('chai');

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
    chai.expect(getOpereator('XI*IX')).to.be.equal('*');
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
