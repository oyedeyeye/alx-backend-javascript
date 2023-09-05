const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe("sendPaymentToAPI function", () => {
  // create the spy or wrapper of existing function
  const consoleSpy = sinon.spy(console, 'log');

  it('Should validate the usage of the Utils function', () => {
    // stub the function to always return 10
    const calculNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // run the function with the parameters
    sendPaymentRequestToApi(100, 20);
    // check that the stub is being called with type = SUM, a = 100, and b = 20
    expect(calculNumStub.calledWith('SUM', 100, 20)).to.be.true;
    // check that the syub always return the same number 10
    expect(calculNumStub.alwaysReturned(10)).to.be.true;
    // check that spy with console.log is logging the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    calculNumStub.restore();
    consoleSpy.restore();
  });
});
