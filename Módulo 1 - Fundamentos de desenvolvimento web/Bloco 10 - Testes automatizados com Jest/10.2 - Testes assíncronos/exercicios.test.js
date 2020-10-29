
const data = require('./codigos');

const { uppercase, getUserName, getRepos, getAnimal } = data;

// Exercício 1
describe('uppercase', () => {
  it('should change the characters of one string to uppercase', done => {
    function callback() {
      expect('Lucas').toBe('Lucas');
      done();
    }
    
    uppercase('Lucas', callback);
  });
});

describe('getUserName', () => {
  // Exercício 2
  it('should get the user name', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('should return error', () => {
    expect.assertions(1);
    return expect(getUserName(1)).rejects.toEqual({'error': 'User with 1 not found.'});
  });
  
  // Exercício 3
  it('should get the user name with async', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('should return error with async', async () => {
    expect.assertions(1);
    try {
      await (getUserName(1));
    } catch (error) {
      expect(error).toEqual({'error': 'User with 1 not found.'})
    }
  });
});

// Exercício 4
describe('getRepos', () => {
  it('should return one array of the archives of the repository that should contain the following two items', async () => {
    expect.assertions(1);
    // await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toEqual(expect.arrayContaining(['sd-01-week4-5-project-todo-list','sd-01-week4-5-project-meme-generator']));
    await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toEqual(expect.arrayContaining(['hackatrybe-covid', 'hexo-template']));
  });
});

// Exercício 5 - Acerte a ordem de impressão
/* beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

1 - beforeEach;
1 - test;
1 - afterEach;
1 - beforeEach;
2 - beforeEach;
2 - test;
2 - afterEach;
1 - afterEach; */

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });
  
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Quando existe um animal com a idade procurada', () => {
    test('Retorne uma lista com o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });
  
  describe('Quando não existe um animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(6).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
