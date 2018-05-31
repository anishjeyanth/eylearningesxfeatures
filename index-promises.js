let CustomerService = require('./services').CustomerService;

function main() {
    try {
        let customerServiceObject = new CustomerService();
        let windSearchString = 'wind';
        let workSearchString = 'work';

        let windPromise = customerServiceObject.getCustomers(windSearchString);
        let workPromise = customerServiceObject.getCustomers(workSearchString);

        Promise.all([windPromise, workPromise])
            .then(
                results => {
                    for (let result of results) {
                        console.log("==========================================");

                        for (let resultItem of result) {
                            console.log(resultItem.toString());
                        }

                        console.log("==========================================");
                    }
                },
                error => {
                    console.log(`One of the promises failed, Reason : ${JSON.stringify(error)}`);
                });
    } catch (error) {
        console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

main();