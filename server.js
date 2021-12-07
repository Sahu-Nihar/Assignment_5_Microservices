// Module import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Custom import
const { PORT } = require('./constants/Constants');
const { API_VERSION } = require('./constants/Constants');

// Routes import
const customerRouter = require('./routes/customer');
const orderRouter = require('./routes/order');

const app = express();

// Cors middleware
app.use(cors());

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(API_VERSION, customerRouter);
app.use(API_VERSION, orderRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});