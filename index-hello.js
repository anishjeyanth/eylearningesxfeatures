let Customer = require('./models').Customer;

function main() {
    try {
        let csvString = '10:Northwind:Bangalore:12000:true:Simple Customer Record';
        let customer = Customer.create(csvString);

        console.log(customer instanceof Customer);
        console.log(customer.toString());
    } catch (error) {
        console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

main();