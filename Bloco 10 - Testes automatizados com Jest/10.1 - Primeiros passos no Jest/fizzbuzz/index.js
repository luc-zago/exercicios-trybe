// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let counter = 1; counter <= n; counter += 1) {
    if ((counter % 3 === 0) && (counter % 5 === 0)) console.log('fizzbuzz');
    if ((counter % 3 === 0) && (counter % 5 !== 0)) console.log('fizz');
    if ((counter % 3 !== 0) && (counter % 5 === 0)) console.log('buzz');
    if ((counter % 3 !== 0) && (counter % 5 !== 0)) console.log(counter);
  };
};

module.exports = fizzBuzz;
