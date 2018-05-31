let Customer = require('./models').Customer;

let customerObject = new Customer(1, 'Northwind', 'Bangalore', 12000, true, 'Simple Record');
let {
    id, name
} = customerObject;

console.log(`Id : ${id}, Name : ${name}`);

function x() {
    return [10, 20, 30, 40, 50];
}

let getX = () => 10;
let [a, , c, d, e, f = getX(), g = getX()] = x();

function y() {
    return {
        eId: 10,
        eName: 'Rajkumar',
        eAddress: 'Trivandrum'
    };
}

let { eName, eAddress } = y();

function Z(obj) {
    obj.id = 10;
    obj.name = 'Raj';
}

let cObj = {
    id: 100,
    name: 'Rajesh',
    address: 'Bangalore'
};

Z(cObj);

console.log(JSON.stringify(cObj));

function Z1({ id, name }) {
    console.log(id + ', ' + name);

    id = 20;

    console.log(id + ', ' + name);
}

Z1(cObj);

console.log(JSON.stringify(cObj));
