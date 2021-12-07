// Module import
const colors = require('colors');

// DB import
const data = require('../db/db');

// utility function import
const validateCustomerIdIsProvided = require('../utils/validateCustomerIdIsProvided');
const getDataById = require('../utils/getDataById');
const validateOrderListExist = require('../utils/validateOrderListExist');
const validateOrderIdIsProvided = require('../utils/validateOrderIdIsProvided');


// Function to get order list of particular customer
const orderListService = (customerId) => {
    try {
        // Validate if ID for customer details to be searched is provided using function validateCustomerIdIsProvided
        let isIdProvided = validateCustomerIdIsProvided(customerId);

        console.log(new Date(), "Validate if Id is provided:", colors.magenta(isIdProvided));

        if (!isIdProvided.success) return isIdProvided;

        // Get particular customer details by its ID using function getDataById
        const customerJson = getDataById("customer", customerId, data);

        console.log(new Date, 'Customer Json returned:', colors.white(customerJson));

        if (!customerJson.success) return customerJson;

        // Validate if order list for that customer exist
        let orderListJson = validateOrderListExist(customerJson.data);

        console.log(new Date, 'Validating order list exist:', colors.white(orderListJson));

        if (!orderListJson.success) return orderListJson;

        let customerOrderList = orderListJson.data;

        return {
            success: true,
            message: 'Order list of the customer found!',
            data: customerOrderList
        };
    }
    catch (error) {
        console.log(new Date(), colors.red(error));
        return {
            success: false,
            message: error
        };
    }
}

// Function to get order details by ID
const orderDetailsByIdService = (customerId, orderId) => {
    try {
        // Validate if ID for customer details to be searched is provided using function validateCustomerIdIsProvided
        let isCustomerIdProvided = validateCustomerIdIsProvided(customerId);

        console.log(new Date(), "Validate if Customer Id is provided:", colors.magenta(isCustomerIdProvided));

        if (!isCustomerIdProvided.success) return isCustomerIdProvided;

        // Validate if ID for order details to be searched is provided using function validateOrderIdIsProvided
        let isOrderIdProvided = validateOrderIdIsProvided(orderId);

        console.log(new Date(), "Validate if Order Id is provided:", colors.magenta(isOrderIdProvided));

        if (!isOrderIdProvided.success) return isOrderIdProvided;

        // Get particular customer details by its ID using function getDataById
        const customerJson = getDataById("customer", customerId, data);

        console.log(new Date, 'Customer Json returned:', colors.white(customerJson));

        if (!customerJson.success) return customerJson;

        // Validate if order list for that customer exist
        let orderListJson = validateOrderListExist(customerJson.data);

        console.log(new Date, 'Validating order list exist:', colors.white(orderListJson));

        if (!orderListJson.success) return orderListJson;

        let customerOrderList = orderListJson.data;

        // Get particular order details by its ID using function getDataById
        const orderJson = getDataById("order", orderId, customerOrderList);

        console.log(new Date, 'Order Json returned:', colors.white(orderJson));

        if (!orderJson.success) return orderJson;

        let orderDetails = orderJson.data;

        return {
            success: true,
            message: 'Order details with provided ID found!',
            data: orderDetails
        };
    }
    catch (error) {
        console.log(new Date(), colors.red(error));
        return {
            success: false,
            message: error
        };
    }
}

module.exports = {
    orderListService,
    orderDetailsByIdService
};