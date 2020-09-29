function factorial(n) {
  for (index = (n -1); index > 0; index -=1) {
    n = n * index;
  }
  return n;
}

const ft = n => { for (index = (n -1); index > 0; index -=1) {
  n = n * index;
  }
return n;
}

const frase = "O sapo não lava o pé, não lava por que não quer, ele mora lá na lagoa não lava o pé por que não quer mas que chule desse grandessíssimo filho da puta";

function longestWord(phrase) {
  const phraseArray = phrase.split(' ');
  let longestWordLength = 0;
  let lgWord = 0;
  for (let index = 0; index < phraseArray.length; index +=1) {
    if (phraseArray[index].length > longestWordLength) {
      longestWordLength = phraseArray[index].length;
      lgWord = phraseArray[index];
    }
  }
  return lgWord;
}

console.log(longestWord(frase));

const lGWord = phrase => {
  const phraseArray = phrase.split(' ');
  let longestWordLength = 0;
  let lgWord = 0;
  for (let index = 0; index < phraseArray.length; index +=1) {
    if (phraseArray[index].length > longestWordLength) {
      longestWordLength = phraseArray[index].length;
      lgWord = phraseArray[index];
    }
  }
  return lgWord;
}
