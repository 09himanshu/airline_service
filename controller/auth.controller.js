
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/server.config');
const util = require('../utils/object.utils');
const utils = require('../utils/constant.utils');
const User = db.user;

// Handler for signup
exports.signup = async (req, res) => {
    let userTypes;
    if(req.body.userTypes == utils.uerTypes.admin) {
        userTypes = utils.uerTypes.admin
    } else {
        userTypes = utils.uerTypes.passenger
    }
    const obj = {
        name: req.body.name,
        email: req.body.email,
        userId: req.body.userId,
        password: bcrypt.hashSync(req.body.password),
        userTypes: userTypes
    }
    try{
        const user = await User.create(obj)
        res.status(200).send({
            name: user.name,
            email: user.email,
            userId: user.userId,
            userTypes: user.userTypes
        })
    } catch(err) {
        console.log(err);
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

// Handler for signing
exports.signing = async (req, res) => {
    try {
        const user = await User.findOne({userId: req.body.userId});
        if(!user) {
            return res.status(404).send({message: `user not found`});
        }

        let isValid = bcrypt.compareSync(req.body.password, user.password);
        if(!isValid) return res.status(403).send({message: `Invalid Password`});

        let token = jwt.sign({_id: user._id}, config.secret,{expiresIn: 1800})
        res.status(200).send({
            name: user.name,
            email: user.email,
            username: user.username,
            token: token
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

exports.findAll = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send(util.userObj(user));
    } catch (err) {
        console.log(`Error occur at ${err}`);
        res.status(500).send({message: `Error occur at ${err}`});
    }
}