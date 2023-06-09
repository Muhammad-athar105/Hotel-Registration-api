// db.js

const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.log('Database connection failed:', error.message);
  });

module.exports = mongoose;
