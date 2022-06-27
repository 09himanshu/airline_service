
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userTypes: {
    type: String,
    required: true,
    default: "Passenger",
  },
  bookedFlight: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "booking",
  },
});

module.exports = mongoose.model('user',userSchema);