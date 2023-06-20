'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// require in the mongoose library
const mongoose = require('mongoose');

// MIDLDLEWARE
app.use(cors());

// DEFINE PORT VALIDATE .ENV IS WORKING
const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received')
})

// LISTEN
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// CONNECT MONGODB USING MONGOOSE
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/books', getBooks);

async function getBooks(request, response, next){
  try {
    let allBooks = await getBooks.find({});
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, repsone) => {
  response.status(404).send('Not available');
});


// ERROR HANDLING
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
