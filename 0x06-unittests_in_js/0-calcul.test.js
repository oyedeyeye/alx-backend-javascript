const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Calculate numbers", function() {
  it("Rounds numbers and sum it", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("Sum whole numbers", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("Rounds first number and sum it with whole number", function() {
    assert.equal(calculateNumber(1.5, 3), 5);
  });

  it("Rounds second number and sum it with whole number", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});
