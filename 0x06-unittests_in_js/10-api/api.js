const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

// GET request made to the homepage
app.get('/', (req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
  res.end();
});

// GET /cart/:id
app.get('/cart/:id(\[0-9]+)', (req, res) => {
  // console.log(`${req.params.id}`);
  res.statusCode = 200;
  res.end(`Payment methods for cart ${req.params.id}`);
});

// GET /available_payments that returns an object
app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    },
  };

  res.json(obj);
});

// POST /login that returns the message Welcome :username
// where :username is the value of the body variable userName
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.end(`Welcome ${username}`);
});


app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
