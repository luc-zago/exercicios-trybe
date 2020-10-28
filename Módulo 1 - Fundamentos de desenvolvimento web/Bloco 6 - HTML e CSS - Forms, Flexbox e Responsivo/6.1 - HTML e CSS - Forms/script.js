window.onload = function () {
  createStatesList();
  
// document.getElementsByName('send')[0].addEventListener('click', cv);

function createStatesList() {
  const statesList = ['Acre' , 'Alagoas' , 'Amapá' , 'Amazonas' , 'Bahia' , 'Ceará' , 'Distrito Federal' , 'Espírito Santo' , 'Goiás' , 'Maranhão' , 'Mato Grosso' , 'Mato Grosso do Sul' , 'Minas Gerais' , 'Pará' , 'Paraíba' , 'Paraná' , 'Pernambuco' , 'Piauí' , 'Rio de Janeiro' , 'Rio Grande do Norte' , 'Rio Grande do Sul' , 'Rondônia' , 'Roraima' , 'Santa Catarina' , 'São Paulo' , 'Sergipe' , 'Tocantins'];
  const statesListInitials = ['AC' , 'AL' , 'AP' , 'AM' , 'BA' , 'CE', 'DF' , 'ES' , 'GO' , 'MA' , 'MT' , 'MS' , 'MG' , 'PA' , 'PB' , 'PR' , 'PE' , 'PI' , 'RJ' , 'RN' , 'RS' , 'RO' , 'RR' , 'SC' , 'SP' , 'SE' , 'TO'];
  for (let index = 0; index < statesList.length; index += 1) {
    const listItem = document.createElement('option');
    listItem.innerText = statesList[index];
    listItem.value = statesListInitials[index];
    document.getElementById('user-state').appendChild(listItem);
  }
}

/*
function cv() {
  const consolidateCV = document.createElement('div');
  consolidateCV.id = "consolidateCV";
  document.getElementsByTagName('body')[0].appendChild(consolidateCV);
  const inputArray = document.getElementsByTagName('input');
  const name = document.createElement('div');
  name.innerText = 'Nome: ' + inputArray[0].value;
  consolidateCV.appendChild(name);
  const email = document.createElement('div');
  email.innerText = 'E-mail: ' + inputArray[1].value;
  consolidateCV.appendChild(email);
  const cpf = document.createElement('div');
  cpf.innerText = 'CPF: ' + inputArray[2].value;
  consolidateCV.appendChild(cpf);
  const adress = document.createElement('div');
  adress.innerText = 'Endereço: ' + inputArray[3].value;
  consolidateCV.appendChild(adress);
  const city = document.createElement('div');
  city.innerText = 'Cidade: ' + inputArray[4].value;
  consolidateCV.appendChild(city);
  const state = document.createElement('div');
  state.innerText = 'Estado: ' + document.getElementsByTagName('select')[0].value;
  consolidateCV.appendChild(state);
  const typeOfHouse = document.createElement('div');
  // typeOfHouse.innerText = $("#form input[type='radio']:checked").value;
  consolidateCV.appendChild(typeOfHouse);
  const resumeLastJob = document.createElement('div');
  resumeLastJob.innerText = 'Resumo do último emprego: ' + document.getElementsByTagName('textarea')[0].value;
  consolidateCV.appendChild(resumeLastJob);
  const position = document.createElement('div');
  position.innerText = 'Cargo: ' + inputArray[7].value;
  consolidateCV.appendChild(position);
  const description = document.createElement('div');
  description.innerText = 'Descrição: ' + inputArray[8].value;
  consolidateCV.appendChild(description);
  const date = document.createElement('div');
  let dateOfBeginning = inputArray[9].value;
  dateOfBeginning = dateOfBeginning.split('');
  const day = dateOfBeginning[8] + dateOfBeginning[9];
  const month = dateOfBeginning[5] + dateOfBeginning[6];
  const year = dateOfBeginning[0] + dateOfBeginning[1] + dateOfBeginning[2] + dateOfBeginning[3];
  date.innerText = 'Data de início: ' + day + '/' + month + '/' + year;
  consolidateCV.appendChild(date);
} /*
/*
function fieldsValidation(array) {
  let counter = 0;
  let validity = false;
  for (index = 0; index < array.length; index += 1) {
    if (array[index].value === '') {
      counter += 1;
    }
  }
  if (counter === 0) {
    validity = true;
  }
  return validity;
};

function radioValidation(array) {
  let validity = false;
  if (array[0] || array[1] === true) {
    validity = true;
  }
  return validity;
}; */

function validateForm() {
  let formValidation = false;
  let fieldsValidation = false;
  let radioValidation = false;
  let counter = 0;
  const inputsHTMLCollection = document.getElementsByTagName('input');
  const formsFieldsLessRadioArray = [].slice.call(inputsHTMLCollection);
  const radiosArray = formsFieldsLessRadioArray.splice(5, 2);
  const select = document.getElementsByTagName('select')[0];
  const textearea = document.getElementsByTagName('textarea')[0];
  formsFieldsLessRadioArray.push(select, textearea);
  for (index = 0; index < formsFieldsLessRadioArray.length; index += 1) {
    if (formsFieldsLessRadioArray[index].value === '') {
      counter += 1;
    }
  }

  if (counter === 0) {
    fieldsValidation = true;
  }

  if (radiosArray[0].checked || radiosArray[1].checked === true) {
    radioValidation = true;
  }

  if (fieldsValidation && radioValidation === true) {
    formValidation = true;
  }

  return formValidation;
};

function createConsolidation() {
  const consolidation = document.createElement('div');
  consolidation.id = 'consolidation';
  const name = document.createElement('p');
  name.innerText = `Nome: ${document.getElementsByTagName('input')[0].value}`;
  consolidation.appendChild(name);
  const email = document.createElement('p');
  email.innerText = `E-mail: ${document.getElementsByTagName('input')[1].value}`;
  consolidation.appendChild(email);
  const cpf = document.createElement('p');
  cpf.innerText = `C.P.F.: ${document.getElementsByTagName('input')[2].value}`;
  consolidation.appendChild(cpf);
  const adress = document.createElement('p');
  adress.innerText = `Endereço: ${document.getElementsByTagName('input')[3].value}`;
  consolidation.appendChild(adress);
  const city = document.createElement('p');
  city.innerText = `Cidade: ${document.getElementsByTagName('input')[4].value}`;
  consolidation.appendChild(city);
  const state = document.createElement('p');
  state.innerText = `Estado: ${document.getElementsByTagName('select')[0].value}`;
  consolidation.appendChild(state);
  const home = document.createElement('p');
  if (document.getElementsByTagName('input')[5].checked === true) {
    home.innerText = 'Casa';
  } else {
    home.innerText = 'Apartamento';
  }
  consolidation.appendChild(home);
  const resume = document.createElement('p');
  resume.innerText = `Resumo: ${document.getElementsByTagName('textarea')[0].value}`;
  consolidation.appendChild(resume);
  const position = document.createElement('p');
  position.innerText = `Cargo: ${document.getElementsByTagName('input')[7].value}`;
  consolidation.appendChild(position);
  const positionDescription = document.createElement('p');
  positionDescription.innerText = `Descrição do cargo: ${document.getElementsByTagName('input')[8].value}`;
  consolidation.appendChild(positionDescription);
  const date = document.createElement('p');
  date.innerText = `Data de início: ${document.getElementsByTagName('input')[9].value}`;
  consolidation.appendChild(date);
  document.getElementsByTagName('body')[0].appendChild(consolidation);
};

document.getElementsByName('send')[0].addEventListener('click', function (event) {
  event.preventDefault();
  validateForm();
  if (validateForm() === true) {
    if (document.getElementById('consolidation') === null) {
    createConsolidation();
    }
  }
});

document.getElementsByName('reset')[0].addEventListener('click', function () {
  if (document.getElementById('consolidation') !== null) {
    document.getElementById('consolidation').remove();
  };
})

/*
function verifyDate() {
  const date = document.getElementById('date').value;
  const dateToArray = date.split('');
  day = parseInt(dateToArray[0] + dateToArray[1]);
  month = parseInt(dateToArray[3] + dateToArray[4]);
  year = parseInt(dateToArray[6] + dateToArray[7] + dateToArray[8] + dateToArray[9]);
  if (dateToArray[2] !== '/') {
    if (dateToArray[5] !== '/') {
    alert('Formato de data deve ser dd/mm/aaaa')
  }
  }
  if (1 > day) {
    alert('Dia não pode ser menor que 1')
    }
  if (day > 31) {
    alert('Dia não pode ser maior que 31')
  }
  if (1 > month) {
    alert('Mês não pode ser menor que 1')
  }
  if (month > 12) {
    alert('Mês não pode ser maior que 12')
  }
  if (year < 0) {
    alert('Ano não pode ser menor que 0')
  }
} */
