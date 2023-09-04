const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("CalculateNumber", function() {
  it("first number rounded", function() {
    assert.equal(calculateNumber(1.5, 3), 5);
    assert.equal(calculateNumber(1.4, 0), 1);
    assert.notEqual(calculateNumber(1.2, 1), 3);
  });

  it("Second number rounded", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1, 0.75), 2);
    assert.notEqual(calculateNumber(0.45, 2), 3);
  });

  it("Both number rounded", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(7.9, 3.2), 11);
    assert.equal(calculateNumber(1.8, 0.7), 3);
    assert.notEqual(calculateNumber(0.45, 2.55), 5);
  });

  it("Sum whole numbers", function() {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(1, 37), 38);
    assert.equal(calculateNumber(6, 75), 81);
    assert.notEqual(calculateNumber(0, 2), 3);
  });
});
