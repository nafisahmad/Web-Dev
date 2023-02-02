const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// get index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// POST
app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('The answer is : ' + result);
});

// server
app.listen(3000, function () {
  console.log('server started on port: 3000');
});
