const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connection to Mongoose Database
mongoose.set('strictQuery', false);
MONGO_URL = 'mongodb://127.0.0.1:27017/wikiDB';

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

// Create Item schema
const articlesSchema = {
  title: String,
  content: String,
};

app.listen(3000, function () {
  console.log('server started at port: 3000');
});
