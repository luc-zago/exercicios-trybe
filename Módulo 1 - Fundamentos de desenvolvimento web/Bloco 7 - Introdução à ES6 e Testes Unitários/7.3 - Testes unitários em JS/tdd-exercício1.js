const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  const addedArray = [];
  for (index = 0; index < array.length; index += 1) {
    addedArray.push(array[index]);
    addedArray[index] += 1;
  }
  return addedArray;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
