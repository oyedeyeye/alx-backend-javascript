const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe("sendPaymentToAPI function", () => {
  // create the spy or wrapper of existing function
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  it('Should validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);
    // check that the spy was called exactly once
    expect(utilSpy.calledOnce).to.be.true;
    // check that the spy was called once with provided arguments
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;

    utilSpy.restore();
  });
});
