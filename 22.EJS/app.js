const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  let today = new Date();
  //   var currentDay = today.getDay();
  //   var day = '';

  //   if (currentDay === 6 || currentDay === 0) {
  //     day = 'current';
  //     //  res.write('<h1> Weekend </h1>');
  //     //  res.sendFile(__dirname + '/weekend.html');
  //     //  res.render('list', { kindOfDay: 'day' });
  //   } else {
  //     day = 'weekday';
  //     //  res.sendFile(__dirname + '/weekday.html');
  //     //  res.render('list', { kindOfDay: 'day' });
  //   }

  //   switch (currentDay) {
  //     case 0:
  //       day = 'Sunday';
  //       break;
  //     case 1:
  //       day = 'Monday';
  //       break;
  //     case 2:
  //       day = 'Tueday';
  //       break;
  //     case 3:
  //       day = 'wedesday';
  //       break;
  //     case 4:
  //       day = 'Thursday';
  //       break;
  //     case 5:
  //       day = 'Friday';
  //       break;
  //     case 6:
  //       day = 'Saturday';
  //       break;
  //     default:
  //       console.log('Error: Current day is equal to: ' + currentDay);
  //       break;
  //   }
  //   res.render('list', { kindOfDay: day });

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('en-US', options);
  res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('server started at port: 3000');
});
