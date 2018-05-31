let CustomerService = require('./services').CustomerService;

function main() {
    try {
        let customerServiceObject = new CustomerService();

        for (let customer of customerServiceObject) {
            console.log(customer.toString());
        }
    } catch (error) {
        console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

main();