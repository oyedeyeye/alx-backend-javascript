const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Integration Testing', () => {

    

  describe('GET /', () => {
    const params = {
      url: 'http://localhost:7865'
    };

    it('should verify the request method', () => {
      request.get(params, (err, res) => {
        // console.error(err); // print the error should in case one occurs
        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.equal(29);
      });
    });

    it('should return the response body', () => {
      request(params, (err, res, body) => {
        // console.error(err); // print the error should in case one occurs
        expect(body).to.equal('Welcome to the payment system');
        expect(typeof body).to.be.a('string');
      });
    });
  });

  describe('GET /cart/:id', () => {

    it('should check GET /cart/ with empty :id', () => {
      const params = {
        url: 'http://localhost:7865/cart',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
    });

    it('Should check GET /cart/1 with single digit number', () => {
      const params = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
      });
    });

    it('Should check GET /cart/23 with double digit number', () => {
      const params = {
        url: 'http://localhost:7865/cart/23',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 23');
      });
    });

    it('Should check GET /cart/123 with triple digit number', () => {
      const params = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
      });
    });

    it('Should check GET /cart/12a with number and letter', () => {
      const params = {
        url: 'http://localhost:7865/cart/12a',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
    });

    it('Should check GET /cart/x25 with letter and number', () => {
      const params = {
        url: 'http://localhost:7865/cart/x25',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
    });

    it('Should check GET /cart/y45a with letters and numbers', () => {
      const params = {
        url: 'http://localhost:7865/cart/y45a',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
    });

    it('Should check GET /cart/hello with letters', () => {
      const params = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(params, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
      });
    });
  });
});