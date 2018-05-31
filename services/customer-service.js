let Customer = require('../models').Customer;

const DEFAULT_SEARCH_STRING = '';
const INVALID_CUSTOMER_NAME = 'Invalid Customer Name or Search String Specified!';
const DEFAULT_TIMEOUT = 4000;
const MIN_INDEX_POS = 0;
const MIN_SEARCH_LENGTH = 4;

let registeredCustomers = [];

class CustomerService {
    constructor() {
        registeredCustomers =
            [
                new Customer(11, 'Northwind', 'Bangalore', 12000, true, 'Simple Customer Record'),
                new Customer(12, 'Eastwind', 'Bangalore', 12000, true, 'Simple Customer Record'),
                new Customer(13, 'Southwind', 'Bangalore', 12000, true, 'Simple Customer Record'),
                new Customer(14, 'Westwind', 'Bangalore', 12000, true, 'Simple Customer Record'),
                new Customer(15, 'Oxyrich', 'Mysore', 22000, false, 'Simple Customer Record'),
                new Customer(16, 'Adventureworks', 'Kannur', 12000, true, 'Simple Customer Record'),
                new Customer(17, 'Footmart', 'Bangalore', 12000, true, 'Simple Customer Record'),
                new Customer(18, 'ePublishers', 'Trivandrum', 12000, true, 'Simple Customer Record')
            ];
    }

    getCustomers(customerName = DEFAULT_SEARCH_STRING) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!customerName) {
                    resolve(registeredCustomers);

                    return;
                }

                let validation = customerName.length >= MIN_SEARCH_LENGTH;

                if (!validation) {
                    reject({
                        reason: INVALID_CUSTOMER_NAME
                    });

                    return;
                }

                let filteredCustomers =
                    registeredCustomers.filter(
                        customer => customer.name.indexOf(customerName) >= MIN_INDEX_POS);

                resolve(filteredCustomers);
            }, DEFAULT_TIMEOUT);
        });

        return promise;
    }

    *[Symbol.iterator]() {
        for (let arrayIndex in registeredCustomers) {
            let customer = registeredCustomers[arrayIndex];

            if (customer) {
                yield customer;
            }
        }
    }
}

module.exports = CustomerService;
