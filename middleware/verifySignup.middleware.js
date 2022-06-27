const User = require('../models').user;

const verifySignup = async (req, res, next) =>{

    // check name
    if(!req.body.name) {
        return res.status(400).send({message: `Name of user is not defined`});
    }
    // check email
    if(!req.body.email) {
        return res.status(400).send({ message: `Email of user is not defined`});
    } else {
        let email = await User.findOne({email: req.body.email});
        if(email) return res.status(400).send({message: `Email is already registered`});
    }
    // check userId
    if(!req.body.userId) {
        return res.status(400).send({message: `UserId of user is not not define`});
    } else {
        let userId = await User.findOne({userId: req.body.userId});
        if(userId) return res.status(400).send({message: `UsedId is already registered`});
    }
    // check password
    if(!req.body.password) {
        return res.status(400).send({message: `Password is not defined`});
    }
    next();
}

module.exports = {
    verifySignup
}