
const controller = require('../controller/feedback.controller');
const {verifyJwt} = require('../middleware');

module.exports = (app) => {
    app.post('/air/api/v1/feedback', [verifyJwt.verifyJwt], controller.feedback);
}