let signupVerify = require('./verifySignup.middleware');
let verifyJwt = require('./verifyJwt.middleware');
let ticketValidate = require('./validateTicket.middleware');
module.exports = {
    signupVerify,
    verifyJwt,
    ticketValidate
}