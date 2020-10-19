const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expected1 = sum(4, 5);

assert.equal(expected1, 9, 'Erro');

const expected2 = sum(0, 0);

assert.equal(expected2, 0, 'Erro');

assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/);
