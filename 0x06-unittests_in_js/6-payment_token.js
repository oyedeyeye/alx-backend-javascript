function getPaymentTokenFromAPI(success) {
return success ? Promise.resolve({data: 'Successful response from the API' }) : '';
}
console.log(getPaymentTokenFromAPI(true));
module.exports = getPaymentTokenFromAPI;
