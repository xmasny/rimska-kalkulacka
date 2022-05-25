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
    it('set_value_IVXLCDM_3896', (done) => {
      const roman = new RomanNumber();
      roman.setValue(3896)
      chai.expect(roman.getValue()).to.be.equal(3896);
      done();
    });


    it('set_value_IVXLCDM_3896', (done) => {
      const roman = new RomanNumber();
      roman.setValue(3896)
      chai.expect(roman.getValue()).to.be.equal(3896);
      done();
    });

    it('I_3', (done) => {
      const roman = new RomanNumber("I");
      roman.setValue(3)
      chai.expect(roman.getValue()).to.be.equal(3);
      done();
    });
  });
});
