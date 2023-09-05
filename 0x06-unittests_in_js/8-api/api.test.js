const { expect } = require('chai');
const request = require('request');

describe('Integration Testing', () => {
  describe('GET request method', () => {
    it('Status code and response body', () => {
      const params = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(params, (err, res, body) => {
        // console.error(err); // print the error should in case one occurs
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
      });
    });
  });
});