
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/server.config');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database connection
mongoose.connect(config.host, () => {
    console.log(`Database connected`);
})

// Read routes
require('./routes/auth.routes')(app);

// App listen on port
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
})