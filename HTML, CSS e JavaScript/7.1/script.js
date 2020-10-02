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

let clickCount = 0;

document.getElementsByTagName('button')[0].addEventListener('click', clickCounter = () => {
  clickCount += 1;
  document.getElementsByTagName('p')[0].innerText = `Cliques: ${clickCount}`
});
