// Exercício 1
const randomNumberBetween0and100 = () => Math.round(Math.random()*100);

// Exercício 4
// 4.1 - Criar função que recebe um string e retorna o string em caixa alta

const upperCase = (string) => string.toUpperCase();

// 4.2 - Criar função que recebe um string e retorna a primeira letra do string
const firstLetter = (string) => string[0];

// 4.3 - Criar função que recebe dois strings e os concatena
const stringConcatenation = (firstString, secondString) => `${firstString}${secondString}`;

// Exercício 6 - Criar função que faz requisição à api dog pictures
// Toda vez que for usar o fetch no node tem que fazer a importação
const fetch = require('node-fetch');

const requestDogPicture = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
};

module.exports = { randomNumberBetween0and100, upperCase, firstLetter, stringConcatenation, requestDogPicture };
