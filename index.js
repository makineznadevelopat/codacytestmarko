const obj = {
  test: 1,
  second: 3,
  3: '3',
};

function test(obja) {
  const stack = [];
  Object.keys(obja).forEach((property) => {
    stack.push(obja[property]);
  });
}

test(obj);
