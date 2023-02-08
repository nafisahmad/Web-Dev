const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
MONGO_URL = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Apple',
  rating: 8,
  review: 'Great Fruit',
});

// fruit.save();
