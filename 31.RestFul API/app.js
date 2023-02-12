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
const articleSchema = {
  title: String,
  content: String,
};

// Name of model = Article
const Article = mongoose.model('Article', articleSchema);

app.get('/articles', function (req, res) {
  Article.find(function (err, foundArticles) {
    // console.log(foundArticles);
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

// post articles from the DB
app.post('/articles', function (req, res) {
  // console.log(req.body.title);
  // console.log(req.body.content);

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  // save new artcle with error handling
  newArticle.save(function (err) {
    if (!err) {
      res.send('Successfully added a new article');
    } else {
      res.send(err);
    }
  });
});

// delete all article
app.delete('/articles', function (req, res) {
  Article.deleteMany(function (err) {
    if (!err) {
      res.send('Successfully deleted all articles');
    } else {
      res.send(err);
    }
  });
});

// Server
app.listen(3000, function () {
  console.log('server started at port: 3000');
});
