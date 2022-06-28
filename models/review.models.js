
const mongoose = require('mongoose');

const feedback = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 1
    },
    origin: {
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
    queryType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('feedback', feedback);