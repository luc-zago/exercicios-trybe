// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const array = Array.from(String(n), Number);
  const newArray = [];
  for (index = array.length - 1; index >= 0; index -= 1) {
    newArray.push(array[index]);
  }
  if (n < 0) newArray.unshift('-');
  return parseInt(newArray.join(''));
}

module.exports = reverseInt;
