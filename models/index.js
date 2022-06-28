let db = {};

db.user = require('./auth.model');
db.booking = require('./booking.models');
db.review = require('./review.models');

module.exports = db;