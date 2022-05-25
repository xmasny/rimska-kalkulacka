import RomanNumber from './RomanNumber.js';
import assert from 'node:assert';

const romanNumber = new RomanNumber("IVXLCI");

assert.equal(romanNumber.maxNumber(), 3999, "My message goes here");

//console.log(romanNumber.romanLetters)