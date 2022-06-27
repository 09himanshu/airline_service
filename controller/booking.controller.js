
const Booking = require('../models').booking;
const User = require('../models').user;
const util = require('../utils/object.utils');

// Handler to book flight tickets
exports.createFlight = async (req, res) => {
    const obj = {
        to: req.body.to,
        from: req.body.from,
        date: req.body.date,
        airline: req.body.airline,
        fromTime: req.body.fromTime,
        toTime: req.body.toTime,
        price: req.body.price
    }
    try{
        const booking = await Booking.create(obj);
        if(booking) {
            let user = await User.findOne({_id: req._id});
            user.bookedFlight.push(booking._id);
            await user.save();
        }
        res.status(200).send(util.bookObj(booking));
    } catch(err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

// Handler to search booked flight tickets
exports.findAll = async (req, res) => {
    let search = {};
    let to = req.query.to;
    let date = req.query.data;
    let airline = req.query.airline;
    if (to && date && airline) {
      search.to = to;
      search.date = date;
      search.airline = airline;
    } else if (to && date) {
      search.to = to;
      search.date = date;
    } else if (to && airline) {
      search.to = to;
      search.airline = airline;
    } else if (date && airline) {
      search.date = date;
      search.airline = airline;
    } else if (date) {
      search.date = date;
    } else if (airline) {
      search.airline = airline;
    }
    try {
        const booking = await Booking.find(search);
        res.status(200).send(util.arrayBooked(booking));
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`})
    }
}