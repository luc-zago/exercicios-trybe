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

  const promise = new Promise((resolve, reject) => {

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

  .then(sum => {
    const divisionArray = [];
    [sum].forEach((number) => {
      divisionArray.push(number / 2);
      divisionArray.push(number / 3);
      divisionArray.push(number / 5);
      divisionArray.push(number / 10);
    });
    console.log(divisionArray);
  })
  .catch(sum => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));

};

window.onload = () => fetchJoke();

 /* const test = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  
  const newArray = array.map((number) => {
    number = number * Math.floor(Math.random() * 50);
    return number * number;
  });

  const sumNumbers = newArray.reduce((result, number) => result + number);

  const testArray = [];
  [sumNumbers].forEach((number) => {
    const divisionWith2 = number / 2;
    testArray.push(divisionWith2);
    const divisionWith3 = number / 3;
    testArray.push(divisionWith3);
    const divisionWith5 = number / 5;
    testArray.push(divisionWith5);
    const divisionWith10 = number / 10;
    testArray.push(divisionWith10);
  })

  return testArray;
}

console.log(test()); */
