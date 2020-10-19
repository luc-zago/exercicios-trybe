const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addKEyAndValueToObject = (obj, key, value) => obj[key] = value;

addKEyAndValueToObject(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);

const objLength = (obj) => {
  let list = Object.keys(obj);
  return list.length;
}

const listValues = (obj) => Object.values(obj);

const allLessons = {};
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

const allStudents = (obj) => {
  const valuesToArray = Object.values(obj);
  let studentsNumber = 0;
  for (let index = 0; index < valuesToArray.length; index +=1) {
    studentsNumber = studentsNumber + valuesToArray[index].numeroEstudantes;
  }
  return studentsNumber;
};

const getValueByNumber = (obj, number) => {
  const valuesToArray = Object.values(obj);
  return valuesToArray[number];
}

const verifyPair = (obj, key, value) => {
  const entriesArray = Object.entries(obj);
  //let checkPair1 = 0;
  //let checkPair2 = 0;
  let result = false;
  for (let index = 0; index < entriesArray.length; index +=1) {
    if ((entriesArray[index][0] === key) && (entriesArray[index][1] === value)) {
      result = true;
    }
  }

    /*
    if (entriesArray[index][1] === pair2) {
      checkPair2 = true;
    }
  }
  if (checkPair1 && checkPair2 === true) {
    result = true;
  } else {
    result = false;
  } */

  return result
};

console.log(verifyPair(lesson1, 'materia', 'Matemática'));
