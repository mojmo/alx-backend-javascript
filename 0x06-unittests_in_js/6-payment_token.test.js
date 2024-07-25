
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });

  it('should do nothing when success is false', function(done) {
    getPaymentTokenFromAPI(false).then(() => {
      done(new Error('Expected no response'));
    }).catch((error) => {
      expect(error).to.be.undefined; // Expect no error object
      done();
    });
  });
});
