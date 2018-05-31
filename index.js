let CustomerService = require('./services').CustomerService;

async function main() {
    try {
        let customerServiceObject = new CustomerService();
        let windSearchString = 'wind';
        let workSearchString = 'work';

        let windPromise = customerServiceObject.getCustomers(windSearchString);
        let workPromise = customerServiceObject.getCustomers(workSearchString);

        let results = await Promise.all([windPromise, workPromise]);

        for (let result of results) {
            console.log("==========================================");

            for (let resultItem of result) {
                console.log(resultItem.toString());
            }

            console.log("==========================================");
        }
    } catch (error) {
        console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

main()
    .then(() => console.log('This line would be printed immediately after main is completed ...'));
