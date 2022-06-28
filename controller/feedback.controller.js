
const Feedback = require('../models').review;
const util = require('../utils/object.utils')

exports.feedback = async (req, res) => {
    const obj = {
        name: req.body.name,
        rating: req.body.rating,
        origin: req.body.origin,
        queryType: req.body.queryType
    }
    try {
        const feed = await Feedback.create(obj);
        res.status(200).send(util.feedbackObj(feed));
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}