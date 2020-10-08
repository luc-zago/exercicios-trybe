const assert = require('assert')

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
]

// escreva shipLength abaixo

const shipLength = (obj) => {
  let {name, length, measurementUnit} = obj;
  // Resolução 1
  /* const message = (name, length, measurementUnit = 'meters') => `${name} is ${length} ${measurementUnit} long`;
  return  message(name, length, measurementUnit); */
  // Resolução 2
  measurementUnit = typeof measurementUnit !== 'undefined' ? measurementUnit : 'meters';
  return `${name} is ${length} ${measurementUnit} long`;
}

assert.equal(shipLength(ships[0]), "Titanic is 269.1 meters long")
assert.equal(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long")
assert.equal(shipLength(ships[2]), "Yamato is 256 meters long")
