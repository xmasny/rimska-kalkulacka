import RomanNumber from '../RomanNumber.js';
import chai from 'chai';

describe('testy uloha 1', () => {
  describe('Roman letters', () => {
    it('Abeceda_I', (done) => {
      const roman = new RomanNumber('I');
      chai.expect(roman.romanLetters).to.be.equal('I');
      done();
    });

    it('Abeceda_IVXLCDMQF', (done) => {
      const roman = new RomanNumber('IVXLCDMQF');
      chai.expect(roman.romanLetters).to.be.equal('IVXLCDMQF');
      done();
    });

    it('ZlaAbecedaPismena', (done) => {
      const roman = new RomanNumber('IVXLCDMSAC');
      chai.expect(roman.romanLetters).to.be.equal('IVXLCDM');
      done();
    });
  });

  describe('Maximum', () => {
    it('maxZlychPismeniek', (done) => {
      const roman = new RomanNumber('IVXLCI');
      chai.expect(roman.maxNumber()).to.be.equal(3999);
      done();
    });

    it('prazdnyMax', (done) => {
      const roman = new RomanNumber(' ');
      chai.expect(roman.maxNumber()).to.be.equal(3999);
      done();
    });

    it('max_V', (done) => {
      const roman = new RomanNumber('V');
      chai.expect(roman.maxNumber()).to.be.equal(3);
      done();
    });

    it('max_IV', (done) => {
      const roman = new RomanNumber('IV');
      chai.expect(roman.maxNumber()).to.be.equal(8);
      done();
    });

    it('max_IVXL', (done) => {
      const roman = new RomanNumber('IVXL');
      chai.expect(roman.maxNumber()).to.be.equal(89);
      done();
    });

    it('max_IVXLC', (done) => {
      const roman = new RomanNumber('IVXLC');
      chai.expect(roman.maxNumber()).to.be.equal(399);
      done();
    });

    it('max_IVXLCDMQF', (done) => {
      const roman = new RomanNumber('IVXLCDMQF');
      chai.expect(roman.maxNumber()).to.be.equal(39999);
      done();
    });
  });

  describe('Set Value', () => {
    it('IVXLCDM_3896', (done) => {
      const roman = new RomanNumber();
      roman.setValue(3896);
      chai.expect(roman.getValue()).to.be.equal(3896);
      done();
    });

    it('I_3', (done) => {
      const roman = new RomanNumber('I');
      roman.setValue(3);
      chai.expect(roman.getValue()).to.be.equal(3);
      done();
    });

    it('IVXLCDM_0', (done) => {
      const roman = new RomanNumber();
      chai.expect(roman.setValue(0)).to.be.false;
      done();
    });

    it('IVXLCDM_NO_NUMBER', (done) => {
      const roman = new RomanNumber('');
      chai.expect(roman.getValue()).to.be.equal(0);
      done();
    });

    it('IVXLCDM_NO_NUMBER_MAX', (done) => {
      const roman = new RomanNumber();
      chai.expect(roman.setValue(4000)).to.be.false;
      chai.expect(roman.getValue()).to.be.equal(0);
      done();
    });

    it('IVXLCDMPQRSTUWYZ_53864324', (done) => {
      const roman = new RomanNumber('IVXLCDMPQRSTUWYZ');
      roman.setValue(53864324);
      chai.expect(roman.getValue()).to.be.equal(53864324);
      done();
    });

    it('IVX_10', (done) => {
      const roman = new RomanNumber('IVX');
      roman.setValue(10);
      chai.expect(roman.getValue()).to.be.equal(10);
      done();
    });

    it('IVX_39', (done) => {
      const roman = new RomanNumber('IVX');
      roman.setValue(39);
      chai.expect(roman.getValue()).to.be.equal(39);
      done();
    });

    it('IVX_40', (done) => {
      const roman = new RomanNumber('IVX');
      roman.setValue(40);
      chai.expect(roman.getValue()).to.be.equal(0);
      done();
    });

    it('IVXLCDMPQRSTUWY_16353046', (done) => {
      const roman = new RomanNumber('IVXLCDMPQRSTUWY');
      roman.setValue(16353046);
      chai.expect(roman.getValue()).to.be.equal(16353046);
      done();
    });

    it('ABCD_80', (done) => {
      const roman = new RomanNumber('ABCD');
      roman.setValue(80);
      chai.expect(roman.getValue()).to.be.equal(80);
      done();
    });
  });
});

describe('testy uloha 2', () => {
  describe('maximum', () => {
    it('IVXLCDM_1_Zero', (done) => {
      const roman = new RomanNumberFull();
      chai.expect(roman.maximum()).to.be.equal(3999);
      chai.expect(roman.minimum()).to.be.equal(-3999);
      done();
    });

    it('OI', (done) => {
      const roman = new RomanNumberFull('OI');
      chai.expect(roman.maximum()).to.be.equal(3);
      chai.expect(roman.minimum()).to.be.equal(-3);
      done();
    });

    it('O', (done) => {
      const roman = new RomanNumberFull('O');
      chai.expect(roman.maximum()).to.be.equal(3999);
      chai.expect(roman.minimum()).to.be.equal(-3999);
      done();
    });

    it('ABCDEFGHIJKLMN', (done) => {
      const roman = new RomanNumberFull('ABCDEFGHIJKLMN');
      chai.expect(roman.maximum()).to.be.equal(39999999);
      chai.expect(roman.minimum()).to.be.equal(-39999999);
      done();
    });

    it('IVXLCDMPQRSTUWYZ_53864324_Zero', (done) => {
      const roman = new RomanNumberFull('OIVXLCDMPQRSTUWYZ');
      chai.expect(roman.maximum()).to.be.equal(89999999);
      chai.expect(roman.minimum()).to.be.equal(-89999999);
      done();
    });
  });

  describe('Value', () => {
    it('IVXLCDM_3896', (done) => {
      const roman = new RomanNumberFull();
      roman.setValue(-3896);
      chai.expect(roman.minimum()).to.be.equal(-39999999);
      done();
    });
  });
});
