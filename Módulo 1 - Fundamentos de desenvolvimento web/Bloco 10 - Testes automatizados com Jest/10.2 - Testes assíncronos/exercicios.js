
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }
  
    return reject({ error: 'User with ' + id + ' not found.' });
  });
}
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];
  
const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }
  
      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);
  
const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

// Exercício 6
// 6.1
const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    const animal = Animals.find((animal) => animal.name === name);
    if (animal !== undefined) return resolve(animal);
    return reject('Nenhum animal com esse nome!');
  })
);

// 6.2 - Adicione uma funcionalidade para buscar os animais pela idade.
// A função deve retornar um array de objetos ou mensagem de erro caso não encontre o animal
const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const animalsArray = Animals.filter((animal) => animal.age === age);
    if (animalsArray.length !== 0) {
      return resolve(animalsArray);
    }
    return reject('Nenhum animal com essa idade!');
  })
);

const getAnimal = (nameOrAge) => {
  // Adicione o código aqui.
  if (typeof nameOrAge === 'string') return findAnimalByName(nameOrAge).then(response => response); //.catch(response => response);
  return findAnimalByAge(nameOrAge).then(response => response);
};

module.exports = { uppercase, getUserName, getRepos, getAnimal };
