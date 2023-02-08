const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
MONGO_URL = 'mongodb://127.0.0.1:27017/people';

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', persoSchema);

const person = new Person({
  name: 'John',
  age: 37,
});

person.save();
