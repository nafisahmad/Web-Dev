const express = require('express');
const { send } = require('process');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello</h1>');
});

app.get('/contact', function (req, res) {
  res.send('Contact me at: nafis.ahmad0087@gmail.com');
});

app.get('/about', function (req, res) {
  res.send('<h1>About US</h1>');
});

app.listen(3000, function (req, res) {
  console.log('server started at port: 3000');
});
