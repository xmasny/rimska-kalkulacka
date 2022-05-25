import RomanNumber from './RomanNumber.js';
import assert from 'node:assert';

const romanNumber = new RomanNumber("IVXLCDMSAC");

assert.equal(romanNumber.romanLetters, "IVXLCDM", "My message goes here");