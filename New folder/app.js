const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Helios@300',
  database: 'user',
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
