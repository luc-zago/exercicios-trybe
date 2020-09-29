const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
  const wordArray = [];
  const wordsLength = [];
  for (index = 0; index < array.length; index += 1) {
    wordArray.push(array[index]);
    wordsLength.push(wordArray[index].split('').length);
  }
  return wordsLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
