const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
  const studentAverageArray = alunos.map((student, index) => {
    let noteAmount = 1;
        return { name: alunos[index], average: notas[index].reduce((sum, note) => {
        noteAmount += 1;
        return sum + note;
      }) / noteAmount
    }
  });
  return studentAverageArray;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
/*
let teste = notas[2];

let teste1 = teste.reduce((soma, nota) => soma + nota, 0);

let teste3 = teste1 / 4;

const teste2 = alunos.map((element, index) => {
  let quantidadeNotas = 0;
  quantidadeNotas += 1;
  return { name: alunos[index], average: notas[index].reduce((soma, nota) => {
      quantidadeNotas += 1;
      return soma + nota;
    }) / quantidadeNotas
  }
});

console.log(teste2); */

assert.deepEqual(studentAverage(), expected);
