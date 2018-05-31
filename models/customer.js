let ObjectFormatter = require('../utilities').ObjectFormatter;

const DELIMITER = ':';
const INVALID_CSV_STRING = 'Invalid CSV String Specified!';

class Customer {
    constructor(id, name, address, credit, status, remarks) {
        [
            this.id, this.name, this.address,
            this.credit, this.status, this.remarks
        ] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }

    static create(csvString) {
        if(!csvString) {
            throw new Error(INVALID_CSV_STRING);
        }        

        let splittedCsvString = csvString.split(DELIMITER);
        let customer = new Customer(...splittedCsvString);

        return customer;
    }
}

module.exports = Customer;
