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
const expected_result = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

assert.deepEqual(formatedBookNames(), expected_result);

// Exercício 2
const expected_result2 = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];

function nameAndAge() {
  // escreva seu código aqui
  const booksArray = books.map((book) => {
    return {age: (book.releaseYear - book.author.birthYear), author: book.author.name};
  });
  return booksArray.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
}

assert.deepEqual(nameAndAge(), expected_result2);

// Exercício 3
const expected_result3 = [
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
 ]
 
function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      return book;
    };
  });  
}

assert.deepEqual(fantasyOrScienceFiction(), expected_result3);

// Exercício 4
const expected_result4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]

function oldBooks() {
  // escreva seu código aqui
  return books.filter((book) => book.releaseYear < 1959).sort((a, b) => {
    if (a.releaseYear > b.releaseYear) {
      return 1;
    }
    if (a.releaseYear < b.releaseYear) {
      return -1;
    }
    return 0;
  });
}

assert.deepEqual(oldBooks(), expected_result4);

// Exercício 5
const expected_result5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      return book;
    };
  }).map((book) => `${book.author.name}`).sort();
}

assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result5);

// Exercício 6
const expected_result6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]

function oldBooksNames() {
  // escreva seu código aqui
  return books.filter((book) => book.releaseYear < 1959).map((book) => `${book.name}`);
}

assert.deepEqual(oldBooksNames(), expected_result6);

// Exercício 7
const expected_result7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  function name(string) {
    let result = false;
    const nameArray = string.split('');
    if (nameArray[1] && nameArray[4] && nameArray[7] === '.') {
      result = true;
    }
    return result;
  };
  return books.filter((book) => name(book.author.name) === true)[0].name;
}

assert.deepEqual(authorWith3DotsOnName(), expected_result7);
