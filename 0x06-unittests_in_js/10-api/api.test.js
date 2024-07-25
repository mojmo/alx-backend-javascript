// api.test.js
const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', () => {
  it('should return the correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return the correct content type', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return the correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  it('should return the correct status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });

  it('should return the correct content type', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      done();
    });
  });
});

describe('Login page', () => {
  it('should return the correct status code', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return the correct content type', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});
