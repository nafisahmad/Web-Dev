//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

// Connection to Mongoose Database
mongoose.set('strictQuery', false);
MONGO_URL = 'mongodb://127.0.0.1:27017/todolistDB';

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

// Create Item schema
const itemsSchema = {
  name: String,
};

// Mongoose Model
const Item = mongoose.model('Item', itemsSchema);

// Mongoose Documents (insert stock data)
const item1 = new Item({
  name: 'Good Morning !',
});
const item2 = new Item({
  name: 'Hit the + button to add new item',
});
const item3 = new Item({
  name: '<--- Hit this box to delete an item',
});

const defaultItems = [item1, item2, item3];

// User custom Schema
const listSchema = {
  name: String,
  items: [itemsSchema],
};

// User mongoose Model
const List = mongoose.model('List', listSchema);

// App
app.get('/', function (req, res) {
  // const day = date.getDate();

  // Find Method
  Item.find({}, function (err, foundItems) {
    // console.log(foundItems);
    if (foundItems.length === 0) {
      // Mongoose insertMany()
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully saved default items to DB');
        }
      });
      res.redirect('/');
    } else {
      res.render('list', { listTitle: 'Today', newListItems: foundItems });
    }
  });
});

// User Custom Link (List)
app.get('/:customListName', function (req, res) {
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // console.log("Doesn't Exist");
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect('/' + customListName);
      } else {
        // console.log('Exits!');
        // Show an existing list
        res.render('list', {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.post('/', function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === 'Today') {
    // save item into collection of item
    item.save();
    res.redirect('/');
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect(listName);
    });
  }

  // if (req.body.list === 'Work') {
  //   workItems.push(item);
  //   res.redirect('/work');
  // } else {
  //   item.push(item);
  //   res.redirect('/');
  // }
});

app.post('/delete', function (req, res) {
  const checkedItemId = req.body.checkbox;
  // console.log(checkedItemId);
  const listName = req.body.listName;

  if (listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (!err) {
        console.log('Successfully deleted checked item.');
        res.redirect('/');
      }
    });
  } else {
  }
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
