const router = require('express').Router();

const {
    orderList,
    orderDetailsById
} = require('../controllers/orderController');

router.get('/customers/:customerId/orders/:orderId', orderDetailsById);
router.get('/customers/:customerId/orders', orderList);

module.exports = router;