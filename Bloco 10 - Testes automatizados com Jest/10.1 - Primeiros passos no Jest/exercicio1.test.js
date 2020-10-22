const { it, expect, test } = require('@jest/globals');
const { describe, array } = require('yargs');
const data = require('./exercicio1');

[sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3] = data;

// import { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obji, obj2, obj3 } from './exercicio1';
// Feito teste com import. Não deu certo. Mensagem de retorno é 'Cannot use import statement outside a module'

// Describe serve para blocos de código
// Por algum motivo, describe não está funcionando
// Para testar pode ser 'it' ou 'test'

it('should sum two numbers', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
});

it('should throw an error if sum one number and one string', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
  expect(() => {
      sum(4, '5');
  }).toThrowError(/^parameters must be numbers$/);
});

it('should remove the item from the array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

/* const checkIfFunctionMyRemoveChangeParameterArray = () => {
  const array = [1, 2, 3, 4];
  myRemove(array, 3);
  return array;
} */

it('should not change the parameter array', () => {
  // expect(checkIfFunctionMyRemoveChangeParameterArray()).toEqual([1, 2, 3, 4]);
  const array = [1, 2, 3, 4];
  myRemove(array, 3);
  expect(array).toEqual([1, 2, 3, 4]);
});

it('should not remove the item from the array if the item does not exist in the array', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

it('should remove the item from the array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

 /*const checkIfFunctionMyRemoveWithoutCopyChangeParameterArray = () => {
  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 3);
  return array;
} */

it('should not change the parameter array', () => {
  // expect(checkIfFunctionMyRemoveWithoutCopyChangeParameterArray()).toEqual([1, 2, 4]);
  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 3);
  expect(array).toEqual([1, 2, 4]);
});

it("should return 'fizzbuzz' if the number is divisible for 3 and 5", () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(30)).toBe('fizzbuzz');
  expect(myFizzBuzz(45)).toBe('fizzbuzz');
});

it("should return 'fizz' if the number is divisible for 3 and not for 5", () => {
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(18)).toBe('fizz');
  expect(myFizzBuzz(27)).toBe('fizz');
});

it("should return 'buzz' if the number is divisible for 5 and not for 3", () => {
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(20)).toBe('buzz');
  expect(myFizzBuzz(25)).toBe('buzz');
});

it("should return the number if the number is not divisible for 3 and 5", () => {
  expect(myFizzBuzz(7)).toBe(7);
  expect(myFizzBuzz(13)).toBe(13);
  expect(myFizzBuzz(22)).toBe(22);
});

it("should return 'false' if the parameter is not a number", () => {
  expect(myFizzBuzz('5')).toBeFalsy();
  expect(myFizzBuzz('Butterfly')).toBeFalsy();
  expect(myFizzBuzz('Saturn')).toBeFalsy();
});

test('if the two objects are equal', () => {
  expect(obj1).toMatchObject(obj2);
});

test('if the two objects are not equal', () => {
  expect(obj1).not.toMatchObject(obj3);
  expect(obj2).not.toMatchObject(obj3);
});
