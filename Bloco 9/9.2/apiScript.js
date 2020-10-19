const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.innerText = data.joke;
    });

  const test = new Promise((resolve, reject) => {

    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    
    const newArray = array.map((number) => {
      number = number * Math.floor(Math.random() * 50);
      return number * number;
    });

    const sum = newArray.reduce((result, number) => result + number);

    if (sum < 8000) {
      return resolve(sum);
    }

    reject(sum);
    // throw new Error('Soma igual ou maior que 8000');

  })
  .then(sum => `Maravilha! Nosso número foi ${sum}`)
  .then(msg => console.log(msg))
  .catch(sum => console.log(`Soma maior ou igual à 8000 ${sum}`));
};

window.onload = () => fetchJoke();

/*
const test = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  
  const newArray = array.map((number) => {
    number = number * Math.floor(Math.random() * 50);
    return number * number;
  });

  const sumNumbers = newArray.reduce((result, number) => result + number);

  return sumNumbers;
}

console.log(test()); */
