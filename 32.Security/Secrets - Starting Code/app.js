//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
// console.log(process.env.SECRET);
// console.log(md5('Nafis')); //for Hashing

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Connecting MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL + 'userDB', function () {
  console.log('connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// MONGOOSE-ENCRYPTION FOR PASSWORD
// const secret = 'Thisisalittlesecret.';
// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ['password'],
// });

const User = new mongoose.model('User', userSchema);

// ROUTES
app.get('/', function (req, res) {
  res.render('home');
});
app.get('/login', function (req, res) {
  res.render('login');
});
app.get('/register', function (req, res) {
  res.render('register');
});

app.post('/register', function (req, res) {
  // BCRYPt
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      email: req.body.username,
      // password: md5(req.body.password),
      password: hash,
    });

    newUser.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.render('secrets');
      }
    });
  });
});

app.post('/login', function (req, res) {
  const username = req.body.username;
  // const password = md5(req.body.password);
  const password = req.body.password;

  User.findOne({ email: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        // if (foundUser.password === password) {
        bcrypt.compare(password, foundUser.password, function (ree, result) {
          if (result === true) {
            res.render('secrets');
          }
        });
        // res.render('secrets');
      }
    }
  });
});

// SERVER
app.listen(3000, function (req, res) {
  console.log('Server started at port : 3000');
});
