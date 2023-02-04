const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const dotenv = require('dotenv').config();

const app = express();

// to use local css add
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  req.body.cityName;
  console.log('Post recieved');

  //   logic + api
  const api = process.env.API_KEY;
  const unit = 'metric';
  const city = req.body.cityName;
  const url =
    'https:/api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&appid=' +
    api +
    '&units=' +
    unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

      res.write(
        '<h1>Temperature in ' + city + ' is : ' + temp + '&#8451; </h1>'
      );

      res.write('<h2>The scene is currently : ' + weatherDescription + '</h2>');
      res.write('<img src=' + imageURL + '>');
      res.send();
      // console.log(weatherDescription);
    });
  });

  //   res.send('Server Running');
});

app.listen(3000, function () {
  console.log('server is running at port 3000');
});
