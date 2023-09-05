const expect = require('chai').expect;

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentToAPI function", () => {
  // create the spy or wrapper of existing function
  let consoleSpy;

  beforeEach(() => {
    // runs before each test suite
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // runs after every test in the suite
    expect(consoleSpy.calledOnce).to.be.true;
    consoleSpy.restore();
  });

  it('Should check sendPaymentRequestToAPI with 100 and 20 as args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('Should check sendPaymentRequestToAPI with 10 and 10 as args', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
