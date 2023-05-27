// models/hotel.js

const mongoose = require('../config/db');

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
    min: 13,
    max : 13,
  },
  nationality: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
