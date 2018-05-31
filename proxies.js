function getData(inputA, inputB) {
    console.log('Getting Data ...');
    let result = inputA + inputB;
    console.log('Getting Data Completed ...');

    return result;
}

function processData(a, b) {
    let validation = a !== b;

    if (!validation) {
        throw new Error('Invalid Inputs!');
    }

    let result = getData(a, b);

    console.log('Processing ...');

    return result;
}

getData = new Proxy(getData, {
    apply: (target, currentObj, args) => {
        console.log('Proxy Work Started ...');

        let originalResult = target(...args);

        console.log('Altering Original Result ...');

        let finalResult = originalResult * 2;

        return finalResult;
    }
});

console.log(`Final Result : ${processData(10, 20)}`);