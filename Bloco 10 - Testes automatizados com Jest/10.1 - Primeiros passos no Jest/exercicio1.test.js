const { it, expect, test } = require('@jest/globals');
const data = require('./exercicio1');

[sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3] = data;

// import { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obji, obj2, obj3 } from './exercicio1';
// Feito teste com import. Não deu certo. Mensagem de retorno é 'Cannot use import statement outside a module'

// Describe serve para blocos de código
// Para testar pode ser 'it' ou 'test'

describe('sum', () => {
  it('should sum two numbers', () =>{
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
});
