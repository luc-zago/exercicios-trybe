const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepEqual(obj1, obj2);
assert.notDeepEqual(obj1, obj3);

/*
assert.equal(myFizzBuzz(15), 'fizzbuzz');
assert.equal(myFizzBuzz(9), 'fizz');
assert.equal(myFizzBuzz(10), 'buzz');
assert.equal(myFizzBuzz(7), 7);
assert.equal(myFizzBuzz('teste'), false);

const arrayTest = [1, 2, 3, 4];

const expected1 = myRemoveWithoutCopy(arrayTest, 3);
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

myRemoveWithoutCopy(arrayTest, 3);

assert.deepEqual(expected1, [1, 2, 4], 'Erro');
assert.notDeepEqual(expected1, [1, 2, 3, 4], 'Erro');
assert.deepEqual(arrayTest, [1, 2, 4], 'Erro');
assert.deepEqual(expected2, [1, 2, 3, 4], 'Erro');

assert.deepEqual(expected2, arrayTest, 'Erro');

const expected1 = sum(4, 5);

assert.equal(expected1, 9, 'Erro');

const expected2 = sum(0, 0);

assert.equal(expected2, 0, 'Erro');

assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/); */
