let signupVerify = require('./verifySignup.middleware');
let verifyJwt = require('./verifyJwt.middleware');

module.exports = {
    signupVerify,
    verifyJwt
}