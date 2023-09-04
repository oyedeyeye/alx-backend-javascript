const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function() {
  it("Both number rounded", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("Sum whole numbers", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("first number rounded", function() {
    assert.equal(calculateNumber(1.5, 3), 5);
  });

  it("Second number rounded", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});
