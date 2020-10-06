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

// Exercício 1
function authorBornIn1947() {
  // escreva aqui o seu código
  const author1947 = books.find(element => element.author.birthYear === 1947);
  const result = author1947.author.name;
  return result;
}

assert.equal(authorBornIn1947(), 'Stephen King');

// Exercício 2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  let nameLength = books[0].name.length;
  const smallerBookName = (item) => {
      if (nameLength > item.name.length) {
        nameLength = item.name.length;
        nameBook = item.name;
      };
  };
  books.forEach(smallerBookName);
  
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.equal(smallerName(), 'Duna');

// Exercício 3
const expected_result = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin'
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991
  };
  
function getNamedBook() {
  // escreva seu código aqui
  return books.find(element => element.name.length === 26);
}

assert.deepEqual(getNamedBook(), expected_result);

// Exercício 4
const expected_result2 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;
  
function booksOrderedByReleaseYearDesc() {
// escreva aqui seu código
return books.sort(function (a, b){
  if (a.releaseYear < b.releaseYear) {
    return 1;
  }
  if (a.releaseYear > b.releaseYear) {
    return -1;
  }
  return 0;
});
}
  
assert.deepEqual(booksOrderedByReleaseYearDesc(), expected_result2);

// Exercício 5
const expected_result3 = false

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const authorsBirthYears = (item) => {
      if (1900 < item.author.birthYear < 2000);
  };
  return books.every(authorsBirthYears);
}

assert.equal(everyoneWasBornOnSecXX(), expected_result3);

// Exercício 6
const expected_result4 = true

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
return books.some(element => {
    if (1980 < element.releaseYear < 1989) {
      return true
    };
});
}

assert.equal(someBookWasReleaseOnThe80s(), expected_result4);

// Exercício 7
const expected_result5 = false;

function authorUnique() {
  // escreva seu código aqui
  // Resolução 1
  const birthyearsArray = [];
  books.forEach((element) => {
    birthyearsArray.push(element.author.birthYear)
  });

let result = true;

for (let index = 0; index < birthyearsArray.length; index += 1) {
  for (let counter = index + 1; counter < birthyearsArray.length; counter += 1) {
    if (birthyearsArray[index] === birthyearsArray[counter]) {
      result = false;
    }
  }
};
return result;
// Resolução 2
}

assert.equal(authorUnique(), expected_result5);
