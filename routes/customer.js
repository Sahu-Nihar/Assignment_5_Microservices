const router = require('express').Router();

const {
    customerDetailsList,
    customerDetailsById
} = require('../controllers/customerController');


router.get('/customers/:customerId', customerDetailsById);
router.get('/customers', customerDetailsList);

module.exports = router;