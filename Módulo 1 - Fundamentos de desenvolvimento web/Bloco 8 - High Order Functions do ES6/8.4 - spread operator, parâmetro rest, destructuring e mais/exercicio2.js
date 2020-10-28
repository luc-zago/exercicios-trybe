const assert = require('assert')

// escreva sum abaixo
const sum = (...input) => {
  let result = 0;
  for (let i of input) {
    result += i;
  }
  return result;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
