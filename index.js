const obj = {
  test: 1,
  second: 3,
  3: "3"
};

const stack = []

Object.keys(obj).forEach(function (property) {
// eslint-disable-next-line security/detect-object-injection
  stack.push(obj[property]);
});