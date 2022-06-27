
const controller = require('../controller/auth.controller');
const { signupVerify, verifyJwt } = require("../middleware");

module.exports = (app) => {

    // Route for create user
    app.post('/air/api/v1/signup', [signupVerify.verifySignup], controller.signup);

    // Route for get all users
    app.get('/air/api/v1/get', controller.findAll);

    // Route for signing
    app.post('/air/api/v1/signing', controller.signing);

    // Route for logout
    app.get('/air/api/v1/logout', [verifyJwt.verifyJwt], controller.logout);
}