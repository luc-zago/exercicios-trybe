window.onload = function () {
  createStatesList();

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
}

