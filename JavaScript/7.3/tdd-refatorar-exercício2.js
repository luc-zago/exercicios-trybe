const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let result = null;
  let substitute = 0;
  
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(substitute +=1);
    } else {
      results.push(characters[i]);
    }
  }
  result = results.join('');
  return result;
};
  
const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);
