const greetPeople = (people) => {
  const greetingPeople = [];
  let greeting = 'Hello ';
  
  for (const person in people) {
    greetingPeople.push(greeting + people[person]);
    }
  return greetingPeople;
};
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(typeof greetPeople, 'function');
assert.deepEqual(greetPeople(parameter), result);
