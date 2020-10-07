const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const countA = (amountOfA, word) => {
    let counter = 0;
    let wordArray = word.split('');
    wordArray.forEach((letter) => {
      if ((letter === 'a') || (letter === 'A')) {
        counter += 1;
      }
    });
    amountOfA += counter;
    return amountOfA;
  };
  return names.reduce(countA, 0);
}

assert.deepEqual(containsA(), 20);
