let { expect } = require("chai");
let converter = require("../src/index");

describe("Convert from Decimal to Roman", function() {
  it("Argument empty", function() {
    expect(() => converter.decimalToRoman()).to.throw(Error, 'Empty argument!');
  });
  it("The argument is a number less than zero", function() {
    expect(() => converter.decimalToRoman(-1)).to.throw(Error, 'Number out of range [0-3000]!');
  });
  it("The argument is a number greater than 3000", function() {
    expect(() => converter.decimalToRoman(3001)).to.throw(Error, 'Number out of range [0-3000]!');
  });
  it("The argument is a empty string", function() {
    expect(() => converter.decimalToRoman('')).to.throw(Error, 'Empty argument!');
  });
  it("The argument is a letter", function() {
    expect(() => converter.decimalToRoman('a')).to.throw(Error, 'Invalid number!');
  });
  
});