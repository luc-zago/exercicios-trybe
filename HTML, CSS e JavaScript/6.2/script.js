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
