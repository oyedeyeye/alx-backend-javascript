const { expect } = require('chai');
const request = require('request');

describe('Integration Testing', () => {

    const params = {
      url: 'http://localhost:7865'
    };

  describe('GET request method', () => {

    it('should verify the request method', () => {
      request(params, (err, res, body) => {
        // console.error(err); // print the error should in case one occurs
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('Status code and response body', () => {
      request(params, (err, res, body) => {
        // console.error(err); // print the error should in case one occurs
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});