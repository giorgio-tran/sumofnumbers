const testData = [1, 2, 3];

const sumFor = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
};

console.log(sumFor(testData));

const sumWhile = (data) => {
  let total = 0;
  let counter = 0;
  while (data[counter] !== undefined) {
    total += data[counter];
    counter++;
  }
  return total;
};

console.log(sumWhile(testData));

const sumRecursion = (data) => {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
};

console.log(sumRecursion(testData));

const sumTheSimpleWay = (data) => _.reduce(data, (prev, curr) => prev + curr);

console.log(sumTheSimpleWay(testData));
