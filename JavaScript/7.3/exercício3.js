const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        len -= 1;
      }
    }
  
    return arr;
  }
  
// implemente seus testes aqui

const arrayTest = [1, 2, 3, 4];

const expected1 = myRemoveWithoutCopy(arrayTest, 3);
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

myRemoveWithoutCopy(arrayTest, 3);

assert.deepEqual(expected1, [1, 2, 4], 'Erro');
assert.notDeepEqual(expected1, [1, 2, 3, 4], 'Erro');
assert.deepEqual(arrayTest, [1, 2, 4], 'Erro');
assert.deepEqual(expected2, [1, 2, 3, 4], 'Erro');

/*
assert.deepEqual(expected2, arrayTest, 'Erro');

const expected1 = sum(4, 5);

assert.equal(expected1, 9, 'Erro');

const expected2 = sum(0, 0);

assert.equal(expected2, 0, 'Erro');

assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/); */
