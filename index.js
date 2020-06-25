let test = 'single quote test';

let obj = {
    "test": 1,
    "second": 3,
    3: "3"
};

let stack = [];

Object.keys(obj).forEach(function (property) {
    stack.push(obj[property]);
});

console.log(stack);