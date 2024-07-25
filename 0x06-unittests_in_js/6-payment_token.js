
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject(); // Reject the promise if success is false
    }
  });
}

module.exports = getPaymentTokenFromAPI;
