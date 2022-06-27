const config = require('../config/server.config');
const jwt = require('jsonwebtoken');

const verifyJwt = async (req, res, next) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.status(400).send({message: `No token provided`});

    jwt.verify(token, config.secret, (err, decode) => {
        if(err) return res.status(401).send({message: `Unauthorized`});
        req._id = decode._id;
        next();
    })
}


// const isAdmin = (req, res, next) => {

// }

module.exports = {
    verifyJwt
}