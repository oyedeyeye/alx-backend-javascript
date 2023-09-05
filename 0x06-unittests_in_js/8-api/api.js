const express = require('express');

const app = express();
const port = 7865;

// GET request made to the homepage
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
  res.end();
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
