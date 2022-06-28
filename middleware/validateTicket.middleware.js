
const validateTicket = async (req, res, next) => {

    // check fot to
    if(!req.body.to) return res.status(400).send({message: `Destination field is empty`});

    // check for from
    if(!req.body.from) return res.status(400).send({message: `Starting place field is empty`});

    // check for date
    if(!req.body.date) return res.status(400).send({message: `Date field is empty`});

    // check for airline
    if(!req.body.airline) return res.status(400).sen({message: `Airline field is empty`});

    // check for toTime
    if(!req.body.toTime) return res.status(400).send({message: `To time field is empty`});

    // check for from time
    if(!req.body.fromTime) return res.status(400).send({message: `From time field is empty`});

    // check for price
    if(!req.body.price || req.body.price <= 0) return res.status(400).send({message: `Price field is empty or you fill the negative price`});

    next();
}

module.exports = {
    validateTicket: validateTicket
}