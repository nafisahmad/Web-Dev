const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mysql = require('mysql2');
// const fetch = require('node-fetch');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Helios@300',
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected!');
  }
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

    fetch('https://randomuser.me/api/?results=5')
      .then((res) => res.json())
      .then((res) => console.log(res.results[0].name.first));

    let tableData = '';
    [res].map((values) => {
      //  tableData += `<h1>${values.email} </h1>`;
      tableData += `<h1>${values.email} </h1>`;
    });
    document.getElementById('tablebody').innerText = tableData;
});

// Server
app.listen(3000, function (req, res) {
  console.log('Server started on port 3000');

  //   https://randomuser.me/api/?results=5000
});
