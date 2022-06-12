const path = require('path');
const express = require('express');
const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://Developer:pt1VMrJCJKZ2BldP@cluster0.ho8l2.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const app = express();
const PORT = 5000;

// app.use(express.json())
app.use(express.static(path.resolve(__dirname + '../../build')));

const MongoRequest = async () => {
  let response = {};
  try {
    await client.connect();
    const users = client.db().collection('practice with request');
    response = await users.findOne({ name: 'Толя' });
  } catch (err) {
    console.error(err);
  }
  console.log('response', response);
  return response;
};

app.get('/features', (req, res) => {
  MongoRequest().then((response) => {
    setTimeout(() => {
      res.json(response);
    }, 300000);
  });
});

app.get('/', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname + '../../build/index.html'));
  }, 0);
});

app.listen(PORT, () => console.log('listening on port 5000'));
