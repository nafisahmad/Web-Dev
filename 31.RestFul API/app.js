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

// // ROUTE REQUEST targetting all articels
app
  .route('/articles')
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      // console.log(foundArticles);
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
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
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send('Successfully deleted all articles');
      } else {
        res.send(err);
      }
    });
  });

// app.get('/articles', function (req, res) {
//   Article.find(function (err, foundArticles) {
//     // console.log(foundArticles);
//     if (!err) {
//       res.send(foundArticles);
//     } else {
//       res.send(err);
//     }
//   });
// });

// Post articles from the DB
// app.post('/articles', function (req, res) {
//   // console.log(req.body.title);
//   // console.log(req.body.content);

//   const newArticle = new Article({
//     title: req.body.title,
//     content: req.body.content,
//   });

//   // Save new artcle with error handling
//   newArticle.save(function (err) {
//     if (!err) {
//       res.send('Successfully added a new article');
//     } else {
//       res.send(err);
//     }
//   });
// });

// Delete all article
// app.delete('/articles', function (req, res) {
//   Article.deleteMany(function (err) {
//     if (!err) {
//       res.send('Successfully deleted all articles');
//     } else {
//       res.send(err);
//     }
//   });
// });

// ROUTE REQUEST targettting specific Article
app
  .route('/articles/:articleTitle')
  .get(function (req, res) {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send('No Articles matching the title was found ');
        }
      }
    );
  })
  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: { title: req.body.title, content: req.body.content } },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send('Successfully updated Article');
        }
      }
    );
  })
  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send('Succesfully updated the article');
        }
        // else {
        //   res.send(err);
        // }
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send('Deleted successfully');
      }
    });
  });

// Server
app.listen(3000, function () {
  console.log('server started at port: 3000');
});
