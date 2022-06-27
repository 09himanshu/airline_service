
const controller = require('../controller/booking.controller');
const {verifyJwt} = require('../middleware');

module.exports = (app) => {

    // Routes to create flight tickets
    app.post('/air/api/v1/flight', [verifyJwt.verifyJwt],controller.createFlight);

    // Routes to fetch all booked flights
    app.get('/air/api/v1/flight', [verifyJwt.verifyJwt], controller.findAll);
}