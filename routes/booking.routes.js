
const controller = require('../controller/booking.controller');
const {verifyJwt, ticketValidate} = require('../middleware');

module.exports = (app) => {

    // Routes to create flight tickets
    app.post('/air/api/v1/flight', [verifyJwt.verifyJwt, ticketValidate.validateTicket],controller.createFlight);

    // Routes to fetch all booked flights
    app.get('/air/api/v1/flight', [verifyJwt.verifyJwt], controller.findAll);

    // Routes to fetch booked tickets based on ids
    app.get('/air/api/v1/flight/:id', [verifyJwt.verifyJwt], controller.findById);

    // Routes to cancel tickets
    app.delete('/air/api/v1/flight/:id', [verifyJwt.verifyJwt], controller.cancelTicket);

    // Routes to update tickets
    app.put('/air/api/v1/flight/:id', [verifyJwt.verifyJwt], controller.update);
}