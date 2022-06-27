const mongoose = require('mongoose');

const booking = new mongoose.Schema({
  to: {
    tye: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
  fromTime: {
    type: String,
    required: true,
  },
  toTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user'
  },
});