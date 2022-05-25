import RomanNumber from '../RomanNumber.js';
import RomanNumberFull from '../RomanNumberFull.js';
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
      chai.expect(roman.maximum()).to.be.equal(3999999);
      chai.expect(roman.minimum()).to.be.equal(-3999999);
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
      chai.expect(roman.getValue()).to.be.equal(-3896);
      done();
    });

    it('Zero', (done) => {
      const roman = new RomanNumberFull();
      chai.expect(roman.setValue(0)).to.be.false;
      chai.expect(roman.getValue()).to.be.equal(0);
      done();
    });

    it('IVXLCDM_NO_NUMBER_MAX_Zero', (done) => {
      const roman = new RomanNumberFull();
      chai.expect(roman.setValue(4000)).to.be.false;
      chai.expect(roman.getValue()).to.be.equal(0);
      done();
    });

    it('I_I_5', (done) => {
      const roman = new RomanNumberFull('I');
      roman.setValue(5);
      chai.expect(roman.getValue()).to.be.equal(5);
      done();
    });

    it('IVXLCDMPQRSTUWYZ_53864324', (done) => {
      const roman = new RomanNumberFull('OIVXLCDMPQRSTUWYZ');
      roman.setValue(53864324);
      chai.expect(roman.getValue()).to.be.equal(53864324);
      done();
    });

    it('TestEfektivnosti_Zero', (done) => {
      for (let i = 0; i < 1000; i++) {
        const roman = new RomanNumberFull('OIVXLCDMPQRSTUWY');
        roman.setValue(16353048);
        if (roman.getValue() != 16353048) {
          chai.expect(false).to.be.true;
        }
      }
      chai.expect(true).to.be.true;
      done();
    });
  });
});

describe('testy uloha 3', () => {
  describe('Class RomanNumber', () => {
    describe('Set roman number', () => {
      it('PrazdnaAbeceda', (done) => {
        const roman = new RomanNumber('');
        roman.setRomanNumber('MMDCIX');
        chai.expect(roman.getValue()).to.be.equal(2609);
        done();
      });

      it('ASDFG', (done) => {
        const roman = new RomanNumber('ASDFG');
        roman.setRomanNumber('GGGSA');
        chai.expect(roman.getValue()).to.be.equal(306);
        done();
      });

      it('LLA', (done) => {
        const roman = new RomanNumber('ALP');
        roman.setRomanNumber('LA');
        roman.setRomanNumber('LLA');
        chai.expect(roman.getValue()).to.be.equal(6);
        done();
      });

      it('KLO', (done) => {
        const roman = new RomanNumber('POILK');
        roman.setRomanNumber('PI');
        roman.setRomanNumber('KLO');
        chai.expect(roman.getValue()).to.be.equal(155);
        done();
      });

      it('IAVXLCQDM', (done) => {
        const roman = new RomanNumber('IAVXLCQDM');
        roman.setRomanNumber('QVA');
        chai.expect(roman.getValue()).to.be.equal(1015);
        done();
      });

      it('I', (done) => {
        const roman = new RomanNumber('I');
        roman.setRomanNumber('I');
        chai.expect(roman.getValue()).to.be.equal(1);
        done();
      });

      it('IVXLCDMPQRSTUWY', (done) => {
        const roman = new RomanNumber('IVXLCDMPQRSTUWY');
        roman.setRomanNumber('YWUSSSRMMMXLVI');
        chai.expect(roman.getValue()).to.be.equal(16353046);
        done();
      });
    });

    describe('Wrong roman number', () => {
      it('PrazdneCislo', (done) => {
        const roman = new RomanNumber('IVX');
        roman.setRomanNumber('');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('ZleZnakyCisla', (done) => {
        const roman = new RomanNumber('IVXLCDM');
        roman.setRomanNumber('MMDXXL');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('IV_IVI', (done) => {
        const roman = new RomanNumber('IV');
        roman.setRomanNumber('IVI');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('IV_VIV', (done) => {
        const roman = new RomanNumber('IV');
        roman.setRomanNumber('VIV');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('IVX_VX', (done) => {
        const roman = new RomanNumber('IVX');
        roman.setRomanNumber('VX');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('IIX', (done) => {
        const roman = new RomanNumber('IVX');
        roman.setRomanNumber('IIX');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('IVXL_LC', (done) => {
        const roman = new RomanNumber('IVXL');
        roman.setRomanNumber('LC');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });

      it('ZlaAbeceda', (done) => {
        const roman = new RomanNumber('IVXLCDMSAC');
        roman.setRomanNumber('SMMDCCCLXXXVIII');
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });
    });
  });

  describe('Class RomanNumberFull', () => {
    describe('Set roman number', () => {
      it('IVXLCDM_MMMDCCCXCIV_Zero', (done) => {
        const roman = new RomanNumberFull();
        roman.setRomanNumber('MMMDCCCXCIV');
        chai.expect(roman.getValue()).to.be.equal(3894);
        done();
      });

      it('IVX_X_Zero', (done) => {
        const roman = new RomanNumberFull('OIVX');
        roman.setRomanNumber('XIV');
        chai.expect(roman.getValue()).to.be.equal(14);
        done();
      });

      it('IVXLCDMPQRSTUWY_YWUSSSRMMMXLVI_Zero', (done) => {
        const roman = new RomanNumberFull('OIVXLCDMPQRSTUWY');
        roman.setRomanNumber('YWUSSSRMMMXLVI');
        chai.expect(roman.getValue()).to.be.equal(16353046);
        done();
      });

      it('ABCD_DCCC_Zero', (done) => {
        const roman = new RomanNumberFull('OABCD');
        roman.setRomanNumber('DCCCAC');
        chai.expect(roman.getValue()).to.be.equal(89);
        done();
      });

      it('TestEfektivnostiPatiek_Zero', (done) => {
        const roman = new RomanNumberFull('OIVXLCDMPQRSTUW');
        for (let i = 0; i < 1000; i++) {
          roman.setRomanNumber('WUSSSRMMMXLVIII');
          if (roman.getValue() != 6353048) {
            chai.expect(false).to.be.true;
          }
        }
        chai.expect(true).to.be.true;
        done();
      });
    });

    describe('Wrong roman number', () => {
      it('IV_OIV_Zero', (done) => {
        const roman = new RomanNumberFull('OIV');
        chai.expect(roman.setRomanNumber('OI')).to.be.false;
        chai.expect(roman.getValue()).to.be.equal(0);
        done();
      });
    });

    describe('Get roman number', () => {
      it('IVXLCDMPQRSTUWYZ_53864324_Zero', (done) => {
        const roman = new RomanNumberFull('OIVXLCDMPQRSTUWYZ');
        roman.setValue(53864324);
        chai.expect(roman.getRomanNumber()).to.be.equal('ZUUUTSSSRQMPCCCXXIV');
        done();
      });

      it('IVXLCDM_3896_Zero', (done) => {
        const roman = new RomanNumberFull();
        roman.setValue(-3896);
        chai.expect(roman.getRomanNumber()).to.be.equal('-MMMDCCCXCVI');
        done();
      });

      it('OMPQRSTUWYZABCD', (done) => {
        const roman = new RomanNumberFull('OMPQRSTUWYZABCD');
        roman.setValue(7777777);
        chai
          .expect(roman.getRomanNumber())
          .to.be.equal('DCCBAAZYYWUUTSSRQQPMM');
        done();
      });

      it('O', (done) => {
        const roman = new RomanNumberFull('OMPQRSTUWYZABCD');
        roman.setValue(0);
        chai.expect(roman.getRomanNumber()).to.be.equal('O');
        done();
      });
    });
  });
});

describe('testy uloha 5', () => {
  it('cislice_I_1', (done) => {
    const number = new RomanNumber('I', 1);
    chai.expect(number.maxNumber()).to.be.equal(3);
    done();
  });

  it('cislice_I_0', (done) => {
    const number = new RomanNumber('IV', 0);
    chai.expect(number.maxNumber()).to.be.equal(3999);
    done();
  });

  it('maxPrivelky', (done) => {
    const number = new RomanNumber('IVXLC', 4000);
    chai.expect(number.maxNumber()).to.be.equal(3999);
    done();
  });

  it('inaNula_II', (done) => {
    const number = new RomanNumber('XYZ', 5);
    chai.expect(number.romanLetters()).to.be.equal('XY');
    chai.expect(number.maxNumber()).to.be.equal(8);
    done();
  });

  it('OIVXLCDMPQWE_II', (done) => {
    const number = new RomanNumber('IVXLCDMPQWE', 8900);
    chai.expect(number.maxNumber()).to.be.equal(8999);
    done();
  });

  it('maximumOIVXLC_II', (done) => {
    const number = new RomanNumber('IVXLCD', 399);
    chai.expect(number.maxNumber()).to.be.equal(399);
    done();
  });

  it('O_II', (done) => {
    const number = new RomanNumber('IV', -1);
    chai.expect(number.maxNumber()).to.be.equal(3999);
    done();
  });

  it('minimumOIVXL_II', (done) => {
    const number = new RomanNumber('IVXLC', 111);
    chai.expect(number.maxNumber()).to.be.equal(399);
    done();
  });

  it('prazdne_II', (done) => {
    const number = new RomanNumber('', 3);
    chai.expect(number.maxNumber()).to.be.equal(3);
    done();
  });

  it('male', (done) => {
    const number = new RomanNumber('IUHTw', 100);
    chai.expect(number.maxNumber()).to.be.equal(399);
    done();
  });

  it('rimskeCisla_max3', (done) => {
    const number = new RomanNumber('IVXLC', 1);
    chai.expect(number.romanLetters()).to.be.equal('I');
    done();
  });

  it('rimskeCisla_max499', (done) => {
    const number = new RomanNumber('IVXLCDM', 499);
    chai.expect(number.romanLetters()).to.be.equal('IVXLCD');
    done();
  });
});
