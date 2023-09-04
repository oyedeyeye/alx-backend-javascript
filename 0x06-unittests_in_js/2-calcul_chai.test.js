const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", () => {
  describe("type=SUM", () => {
    it("first number rounded", () => {
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
      expect(calculateNumber('SUM', 1.4, 0)).to.equal(1);
      expect(calculateNumber('SUM', 1.2, 1)).to.equal(2);
    });

    it("Second number rounded", () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1, 0.75)).to.equal(2);
      expect(calculateNumber('SUM', 0.45, 2)).to.equal(2);
    });

    it("Both number rounded", () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 7.9, 3.2)).to.equal(11);
      expect(calculateNumber('SUM', 1.8, 0.7)).to.equal(3);
      expect(calculateNumber('SUM', 0.45, 2.55)).to.equal(3);
    });

    it("Sum whole numbers", () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', 1, 37)).to.equal(38);
      expect(calculateNumber('SUM', 6, 75)).to.equal(81);
      expect(calculateNumber('SUM', 0, 2)).to.equal(2);
    });
  });

  describe("type=SUBTRACT", () => {
    it("subtract from first number rounded", () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.4, 0)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 3.2, 3)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 2.2, 1.0)).to.equal(1);
    });

    it("subtract second number rounded", () => {
      expect(calculateNumber('SUBTRACT', 9, 3.7)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 1, 2.75)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0.45, 2)).to.equal(-2);
    });

    it("subtraction with Both number rounded", () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 7.9, 3.2)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 1.8, 0.7)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 0.45, -2.55)).to.equal(3);
    });

    it("subtract whole numbers", () => {
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
      expect(calculateNumber('SUBTRACT', -4, 7)).to.equal(-11);
      expect(calculateNumber('SUBTRACT', 5, -1)).to.equal(6);
    });
  });

  describe("type=DIVIDE", () => {
    it("Divide first number rounded", () => {
      expect(calculateNumber('DIVIDE', 1.5, 4)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 8.5, 4)).to.equal(2.25);
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.2, -1)).to.equal(-1);
    });

    it("Divide second number rounded", () => {
      expect(calculateNumber('DIVIDE', 10, 1.7)).to.equal(5);
      expect(calculateNumber('DIVIDE', 2, 0.75)).to.equal(2);
      expect(calculateNumber('DIVIDE', 2, -0.45)).to.equal('Error');
    });

    it("Divide both number rounded", () => {
      expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', 7.9, 2.2)).to.equal(4);
      expect(calculateNumber('DIVIDE', 3.8, 1.7)).to.equal(2);
      expect(calculateNumber('DIVIDE', 0.5, 1.55)).to.equal(0.5);
    });

    it("Divide sum whole numbers", () => {
      expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
      expect(calculateNumber('DIVIDE', 0, -2)).to.equal(0);
    });
  });

});
