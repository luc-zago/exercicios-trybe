const data = require('./exercicios');

// const { requestDogPicture } = data;

// Exercício 1 - Simular resultado de função randômica
describe('randomBumberBetween0and100', () => {
  it('should be 10', () => {
    data.randomNumberBetween0and100 = jest.fn().mockReturnValue(10);

    data.randomNumberBetween0and100();
    expect(data.randomNumberBetween0and100).toHaveBeenCalled();
    expect(data.randomNumberBetween0and100()).toBe(10);
  });
});

// Exercício 2 - criar implementação de divisão de dois números para a função
jest.mock('./exercicios');

describe('randomBumberBetween0and100 division implementation', () => {
  it('should divide two numbers', () => {
    data.randomNumberBetween0and100.mockImplementation((a, b) => a / b);
    data.randomNumberBetween0and100(10, 5);
    
    expect(data.randomNumberBetween0and100).toHaveBeenCalled();
    expect(data.randomNumberBetween0and100).toHaveBeenCalledTimes(3);
    expect(data.randomNumberBetween0and100).toHaveBeenCalledWith(10, 5);
    expect(data.randomNumberBetween0and100(10, 5)).toBe(2);
  });
});

// Exercício 3 - criar implementação de multiplicação de 3 números, resetar a função e fazer
// nova implementação de dobrar parâmetro

describe('randomBumberBetween0and100 multiply and double implementation', () => {
  it('should multiply three numbers', () => {
    data.randomNumberBetween0and100.mockImplementation((a, b, c) => a * b * c);
    data.randomNumberBetween0and100(3, 5, 7);
      
    expect(data.randomNumberBetween0and100).toHaveBeenCalled();
    expect(data.randomNumberBetween0and100).toHaveBeenCalledTimes(5);
    expect(data.randomNumberBetween0and100).toHaveBeenCalledWith(3, 5, 7);
    expect(data.randomNumberBetween0and100(3, 5, 7)).toBe(105);
  });

  data.randomNumberBetween0and100.mockReset();

  it('should double one number', () => {
    data.randomNumberBetween0and100.mockImplementation((n) => n + n);
    data.randomNumberBetween0and100(9);
      
    expect(data.randomNumberBetween0and100).toHaveBeenCalled();
    expect(data.randomNumberBetween0and100).toHaveBeenCalledTimes(7);
    expect(data.randomNumberBetween0and100).toHaveBeenCalledWith(9);
    expect(data.randomNumberBetween0and100(9)).toBe(18);
  });
});

// Exercício 4

describe('upperCase', () => {
  it('should return one string in low case', () => {
    data.upperCase.mockImplementation((string) => string.toLowerCase());
    data.upperCase('Lucas');

    expect(data.upperCase).toHaveBeenCalled();
    expect(data.upperCase).toHaveBeenCalledTimes(1);
    expect(data.upperCase).toHaveBeenCalledWith('Lucas');
    expect(data.upperCase('Lucas')).toBe('lucas');
  });
});

describe('firstLetter', () => {
  it('should return the last letter of one string', () => {
    data.firstLetter.mockImplementation((string) => string[string.length - 1]);
    data.firstLetter('Lucas');
  
    expect(data.firstLetter).toHaveBeenCalled();
    expect(data.firstLetter).toHaveBeenCalledTimes(1);
    expect(data.firstLetter).toHaveBeenCalledWith('Lucas');
    expect(data.firstLetter('Lucas')).toBe('s');
  });
});

describe('stringConcatenation', () => {
  it('should concatenate three strings', () => {
    data.stringConcatenation.mockImplementation((firstString, secondString, thirdString) => `${firstString}${secondString}${thirdString}`);
    data.stringConcatenation('Lucas', 'Honório', 'Miranda');
    
    expect(data.stringConcatenation).toHaveBeenCalled();
    expect(data.stringConcatenation).toHaveBeenCalledTimes(1);
    expect(data.stringConcatenation).toHaveBeenCalledWith('Lucas', 'Honório', 'Miranda');
    expect(data.stringConcatenation('Lucas', 'Honório', 'Miranda')).toBe('LucasHonórioMiranda');
  });
});

data.upperCase.mockReset();

// Quando for fazer testes no node com o fetch, tem que se lembrar de importar o fetch e simulá-lo
const fetch = require('node-fetch');

// jest.mock('node-fetch');

describe('requestDogPicture', () => {
  const requestDogPictureURL = jest.spyOn( data, 'requestDogPicture');
  afterEach(requestDogPictureURL.mockReset);

  test('if promise resolves', async () => {
    requestDogPictureURL.mockResolvedValue('requisition realized with sucess');

    requestDogPictureURL();
    expect(requestDogPictureURL).toHaveBeenCalled();
    expect(requestDogPictureURL).toHaveBeenCalledTimes(1);
    expect(requestDogPictureURL()).resolves.toBe('requisition realized with sucess');
    expect(requestDogPictureURL).toHaveBeenCalledTimes(2);
  });

  test('if promise rejects', async () => {
    requestDogPictureURL.mockRejectedValue('requisition failed');

    expect(requestDogPictureURL).toHaveBeenCalledTimes(0);
    expect(requestDogPictureURL()).rejects.toMatch('requisition failed');
    expect(requestDogPictureURL).toHaveBeenCalledTimes(1);
  });
});
