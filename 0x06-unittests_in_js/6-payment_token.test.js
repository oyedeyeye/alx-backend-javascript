const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should check output of the Api', () => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.include({data: 'Successful response from the API' });
      done();
    }).catch((err) => done(err));
  });
});
