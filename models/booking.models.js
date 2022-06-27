const mongoose = require('mongoose');

const booking = new mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  airline: {
    type: String,
    required: true
  },
  fromTime: {
    type: String,
    required: true
  },
  toTime: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('booking', booking);