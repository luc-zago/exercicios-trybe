const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


function allNames() {
  // escreva seu código aqui
  const authorNames = (acc, element) => `${acc} ${element.author.name},`;
  const names = books.reduce(authorNames, 'Nomes:');
  const result = names.substring(0, names.length -1);
  return `${result}.`;
}
/*
const authorNames = (acc, element) => `${acc} ${element.author.name},`;
const teste = `${books.reduce(authorNames, 'Nomes:')}`;
const teste1 = teste.substring(0, teste.length -1); */

assert.deepEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

const expected_result2 = 43;

function averageAge() {
  // escreva seu código aqui
  let authorsAmount = 0;
  const ageSum = (acc, element) => {
    authorsAmount += 1;
    return acc + (element.releaseYear - element.author.birthYear);
  }
  return books.reduce(ageSum, 0) / authorsAmount;
}

/*
const age = (element) => {
  return element.releaseYear - element.author.birthYear;
}

let counter = 0;
const teste = (acc, element) => {
  counter += 1;
  return acc + (element.releaseYear - element.author.birthYear);
}

// console.log(books.reduce(teste, 0))
// console.log(counter); */

assert.equal(averageAge(), expected_result2);

const expected_result3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};
  
function longestNamedBook() {
  // escreva seu código aqui
  let bookWithBiggerName;
  const getBigger = (biggestName, book) => {
    if (biggestName < book.name.length) {
      biggestName = book.name.length;
      bookWithBiggerName = book;
    }
    return bookWithBiggerName;
  }
  return books.reduce(getBigger, 0);
}
/*
const getBigger = (biggestName, book) => {
  console.log(book.name.length);
  (biggestName > book.name.length) ? biggestName : book.name.length;
  return biggestName;
}

let bookWithBiggerName;

const getBigger3 = (biggestName, book) => {
    console.log(book.name.length);
    if (biggestName < book.name.length) {
      biggestName = book.name.length;
      bookWithBiggerName = book;
    }
    return bookWithBiggerName;
  }

const getBigger2 = (biggestName, book) => (biggestName > book) ? biggestName : book;

const teste = books.reduce(getBigger3, 0)

const array = [1, 2, 27, 4, 5, 6];

console.log(teste);
// console.log(array.reduce(getBigger2, 0)); */

assert.deepEqual(longestNamedBook(), expected_result3);
