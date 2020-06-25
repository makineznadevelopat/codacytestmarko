let test = 'single quote test';

let obj = {
    "test": 1,
    "second": 3,
    3: "3"
};

let stack = [];

Object.keys(obj).forEach(function (property) {
    let temp = obj[property];
    stack.push(temp);
});

console.log(stack);