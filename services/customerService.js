// Module import
const colors = require('colors');

// DB import
const data = require('../db/db');

// utility function import
const validateCustomerIdIsProvided = require('../utils/validateCustomerIdIsProvided');
const getDataById = require('../utils/getDataById');

// Function to get list of all customers
const customerDetailsListService = () => {
    try {
        if (!data.customers.length) return {
            success: false,
            message: 'No customer details present!'
        }

        // Map all customer details from the list 
        let customerDetailsList = data.customers.map(cus => ({ customer_id: cus.customer_id, firstName: cus.firstName, lastName: cus.lastName, phoneNumber: cus.phoneNumber, emailAddress: cus.emailAddress }));

        console.log(new Date(), "Customer Details List:", colors.green(customerDetailsList));

        return {
            success: true,
            message: 'List of customers data found!',
            data: customerDetailsList
        };

    }
    catch (error) {
        console.log(new Date(), colors.red(error));
        return {
            success: false,
            message: error
        };
    }
};

// Function to get customer details by ID
const customerDetailsByIdService = (customerId) => {
    try {
        // Validate if ID for customer details to be searched is provided using function validateCustomerIdIsProvided
        let isIdProvided = validateCustomerIdIsProvided(customerId);

        console.log(new Date(), "Validate if Id is provided:", colors.magenta(isIdProvided));

        if (!isIdProvided.success) return isIdProvided;

        // Get particular customer details by its ID using function getDataById
        const customerJson = getDataById("customer", customerId, data);

        console.log(new Date, 'Customer Json returned:', colors.white(customerJson));

        if (!customerJson.success) return customerJson;
        
        let customerDetails = {
            customer_id: customerJson.data.customer_id,
            firstName: customerJson.data.firstName,
            lastName: customerJson.data.lastName,
            phoneNumber: customerJson.data.phoneNumber,
            emailAddress: customerJson.data.emailAddress
        };

        return {
            success: true,
            message: 'Customer details found!',
            data: customerDetails
        };
    }
    catch (error) {
        console.log(new Date(), colors.red(error));
        return {
            success: false,
            message: error
        };
    }
};

module.exports = {
    customerDetailsListService,
    customerDetailsByIdService
};