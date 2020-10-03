const assert = require('assert');

function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (item !== arr[i]) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

// implemente seus testes aqui

const arrayTest = [1, 2, 3, 4];
const arrayResult = [1, 2, 4];

const expected1 = myRemove(arrayTest, 3);
const expected2 = myRemove(arrayTest, 5);

assert.deepEqual(expected1, arrayResult, 'Erro');

assert.notDeepEqual(expected1, arrayTest, 'Erro');

assert.deepEqual(arrayTest, [1, 2, 3, 4], 'Erro');

assert.deepEqual(expected2, arrayTest, 'Erro');

/*
const expected1 = sum(4, 5);

assert.equal(expected1, 9, 'Erro');

const expected2 = sum(0, 0);

assert.equal(expected2, 0, 'Erro');

assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/); */
