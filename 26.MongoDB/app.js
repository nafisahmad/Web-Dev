const { MongoClient } = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// database name
const dbName = 'fruitsDB';

// create new mongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});
