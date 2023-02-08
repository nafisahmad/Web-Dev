const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
MONGO_URL = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no NAME specified'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  //   name: 'Apple',
  rating: 10,
  review: 'Peaches are such Great Fruit',
});

// fruit.save();

// Person collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model('Person', personSchema);

// const pineapple = new Fruit({
//   name: 'Pineapple',
//   score: 9,
//   review: 'Great Taste',
// });

// pineapple.save();

const mango = new Fruit({
  name: 'Mango',
  score: 8,
  review: 'King of fruits',
});

// mango.save();

const person = new Person({
  name: 'John',
  age: 37,
});

// const person = new Person({
//   name: 'Amy',
//   age: 12,
//   favouriteFruit: pineapple,
// });

// tosave
// person.save();

// UPDATE FAVOURITE FRUIT:_-----
// Person.updateOne({ name: 'John' }, { favouriteFruit: mango }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully Updated favourite Fruit');
//   }
// });

const kiwi = new Fruit({
  name: 'Kiwi',
  score: 10,
  review: 'Best fruit',
});

const orange = new Fruit({
  name: 'Orange',
  score: 6,
  review: 'Too sweet for me',
});

const banana = new Fruit({
  name: 'Banana',
  score: 7,
  review: 'Weird Shape',
});

// TOSAVE
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully saved all fruits to fruitsDB');
//   }
// });

// To view
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //  CLOSE THE CONNECTION
    //  mongoose.connection.close();
    mongoose.connection.close(function () {
      // console.log(
      //   'Mongoose default connection disconnected through app termination'
      // );
      process.exit(0);
    });

    //  console.log(fruits);
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// TO upDATE
// Fruit.updateOne(
//   { _id: '63e39ff0f138fbca00683b10' },
//   { name: 'Peach' },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Successfully Updated Document');
//     }
//   }
// );

// Delete a particular entry
// Fruit.deleteOne({ _id: '63e3b4c0249ce4f59ce0cf3d' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted Document');
//   }
// });

// Delete More than one
// Person.deleteMany({ name: 'John', name: 'Amy' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted all the Documents');
//   }
// });
