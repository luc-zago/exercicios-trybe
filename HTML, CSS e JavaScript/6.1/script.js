window.onload = function () {
  createStatesList();
  document.getElementsByName('send')[0].addEventListener('click', cv);

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
}

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
}
