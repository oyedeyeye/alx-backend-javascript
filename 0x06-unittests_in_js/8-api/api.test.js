const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Integration Testing', () => {

    const params = {
      url: 'http://localhost:7865'
    };

  describe('GET request method', () => {

    it('should verify the request method', () => {
      request.get(params, (err, res) => {
        // console.error(err); // print the error should in case one occurs
        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.equal(29);
      });
    });

    it('Status code and response body', () => {
      request(params, (err, res, body) => {
        // console.error(err); // print the error should in case one occurs
        expect(body).to.equal('Welcome to the payment system');
        expect(typeof body).to.be.a('string');
      });
    });
  });
});