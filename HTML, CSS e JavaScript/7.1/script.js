//Exercício 1: criar uma função que recebe número de entrada e retorna o fatorial do número

const fatorial = (n) => {
  let result = 1;
  for (let counter = 0; n > counter; n -= 1) {
    result *= n;
  }
  return result;
}

//Exercício 2: criar uma função que recebe uma frase e retorna a maior palavra

const longestWord = (string) => {
  const stringToArray = string.split(' ');
  let wordLength = 0;
  let longestWordLength = 0;
  let result = null;
  for (let index = 0; index < stringToArray.length; index += 1) {
    wordLength = stringToArray[index].split('').length;
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
      result = stringToArray[index];
    }

  }
  return result;
}

//Exercício 3: criar uma página html com um botão, uma variável clickCount que conta o número de cliques e um campo html que vai atualizando com a quantidade de cliques

/*
let clickCount = 0;

document.getElementsByTagName('button')[0].addEventListener('click', clickCounter = () => {
  clickCount += 1;
  document.getElementsByTagName('p')[0].innerText = `Cliques: ${clickCount}`
}); */

//Exercício 4
//1. Crie uma função que recebe um string como parâmetro e substitui pelo x de uma string determinada

const changeX = (string) => {
  let preorderedString = 'Tryber x aqui!'
  const stringToArray = preorderedString.split(' ');
  for (let index = 0; index < stringToArray.length; index += 1) {
    if (stringToArray[index] === 'x') {
      stringToArray[index] = string;
    }
  }
  const result = stringToArray.join(' ');
  return result;
};

const returnChangeXForLucas = (changeX('Lucas'));

//2. Crie um array com escopo global contendo cinco das suas principais skills

const skills = ['adaptável', 'comunicativo', 'disciplinado', 'paciente', 'companheiro'];

//3. Crie uma função que vai receber a string retornada da função 1 como parâmetro. Essa função deve retornar um novo string com a primeira frase e a lista de skills em ordem alfabética

const mySkills = (string) => {
  skills.sort();
  return `${string} Minhas cinco principais habilidades são:
  - ${skills[0]};
  - ${skills[1]};
  - ${skills[2]};
  - ${skills[3]};
  - ${skills[4]};`
};

console.log(mySkills(returnChangeXForLucas))
