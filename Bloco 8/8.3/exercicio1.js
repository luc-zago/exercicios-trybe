const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const emptyArray = [];
  const mergeArray = (acc, element) => {
    element.forEach((element) => emptyArray.push(element));
    return emptyArray;
  }
  const result = arrays.reduce(mergeArray, 0)
  return result;
}
/*
const array = [];
const teste = (acc, element) => {
// console.log(acc);
  element.forEach((element) => array.push(element));
  return array;
}

const teste1 = (acc, element) => acc + ' ' + element;

const teste2 = [1, 2, 3];

const teste3 = arrays.reduce(teste1).split(',');

const teste4 = arrays.reduce(teste, 0);

console.log(flatten()); */

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
