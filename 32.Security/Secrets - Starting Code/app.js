//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
// BCRYPT----------------------
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// express-session------------------
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

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

// SetUp Session
app.use(
  session({
    secret: 'Our little Secret.',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

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

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
app.get('/secrets', function (req, res) {
  if (req.isAuthenticated()) {
    res.render('secrets');
  } else {
    res.redirect('/login');
  }
});

app.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});
app.post('/register', function (req, res) {
  // BCRYPt
  // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
  //   const newUser = new User({
  //     email: req.body.username,
  //     // password: md5(req.body.password),
  //     password: hash,
  //   });
  //   newUser.save(function (err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.render('secrets');
  //     }
  //   });
  // });

  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect('/register');
      } else {
        passport.authenticate('local')(req, res, function () {
          res.redirect('/secrets');
        });
      }
    }
  );
});

app.post('/login', function (req, res) {
  // const username = req.body.username;
  // // const password = md5(req.body.password);
  // const password = req.body.password;
  // User.findOne({ email: username }, function (err, foundUser) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     if (foundUser) {
  //       // if (foundUser.password === password) {
  //       bcrypt.compare(password, foundUser.password, function (ree, result) {
  //         if (result === true) {
  //           res.render('secrets');
  //         }
  //       });
  //       // res.render('secrets');
  //     }
  //   }
  // });

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/secrets');
      });
    }
  });
});

// SERVER
app.listen(3000, function (req, res) {
  console.log('Server started at port : 3000');
});