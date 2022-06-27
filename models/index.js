let db = {};

db.user = require('./auth.model');
db.booking = require('./booking.models');

module.exports = db;