const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber", () => {
  describe("sum of number - SUM", () => {
    it("first number rounded", () => {
      assert.equal(calculateNumber('SUM', 1.5, 3), 5);
      assert.equal(calculateNumber('SUM', 1.4, 0), 1);
      assert.notEqual(calculateNumber('SUM', 1.2, 1), 3);
    });

    it("Second number rounded", () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1, 0.75), 2);
      assert.notEqual(calculateNumber('SUM', 0.45, 2), 3);
    });

    it("Both number rounded", () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.equal(calculateNumber('SUM', 7.9, 3.2), 11);
      assert.equal(calculateNumber('SUM', 1.8, 0.7), 3);
      assert.notEqual(calculateNumber('SUM', 0.45, 2.55), 5);
    });

    it("Sum whole numbers", () => {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
      assert.equal(calculateNumber('SUM', 1, 37), 38);
      assert.equal(calculateNumber('SUM', 6, 75), 81);
      assert.notEqual(calculateNumber('SUM', 0, 2), 3);
    });
  });

  describe("Subtraction of number - SUBTRACT", () => {
    it("subtract from first number rounded", () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 3), 2);
      assert.equal(calculateNumber('SUBTRACT', 1.4, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 3.2, 3), 0);
      assert.notEqual(calculateNumber('SUBTRACT', 2.2, 1.0), 0);
    });

    it("subtract second number rounded", () => {
      assert.equal(calculateNumber('SUBTRACT', 9, 3.7), 5);
      assert.equal(calculateNumber('SUBTRACT', 1, 2.75), -2);
      assert.notEqual(calculateNumber('SUBTRACT', 0.45, 2), -3);
    });

    it("subtraction with Both number rounded", () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.equal(calculateNumber('SUBTRACT', 7.9, 3.2), 5);
      assert.equal(calculateNumber('SUBTRACT', 1.8, 0.7), 1);
      assert.notEqual(calculateNumber('SUBTRACT', 0.45, 2.55), -4);
    });

    it("subtract whole numbers", () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
      assert.equal(calculateNumber('SUBTRACT', 4, 1), 3);
      assert.equal(calculateNumber('SUBTRACT', -4, 7), -11);
      assert.notEqual(calculateNumber('SUBTRACT', 5, 1), 3);
    });
  });

  describe("Division of number - DIVIDE", () => {
    it("Divide first number rounded", () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, 4), 0.5);
      assert.equal(calculateNumber('DIVIDE', 8.5, 4), 2.25);
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.notEqual(calculateNumber('DIVIDE', 1.2, 0), 3);
    });

    it("Divide second number rounded", () => {
      assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
      assert.equal(calculateNumber('DIVIDE', 2, 0.75), 2);
      assert.notEqual(calculateNumber('DIVIDE', 2, 0.45), 3);
    });

    it("Divide both number rounded", () => {
      assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
      assert.equal(calculateNumber('DIVIDE', 7.9, 2.2), 4);
      assert.equal(calculateNumber('DIVIDE', 3.8, 1.7), 2);
      assert.notEqual(calculateNumber('DIVIDE', 0.5, 1.55), 0);
    });

    it("Divide sum whole numbers", () => {
      assert.equal(calculateNumber('DIVIDE', 0, 2), 0);
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
      assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
      assert.notEqual(calculateNumber('DIVIDE', 0, 2), 1);
    });
  });

});
