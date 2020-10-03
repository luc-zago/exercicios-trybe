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
  
  new JustValidate('.js-form', {

    rules: {
      fullname: {
        required: true,
        maxLength: 40
      },
      email: {
        required: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      adress: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      resume: {
        required: true,
        maxLength: 1000
      },
      position: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true,
      }
    },
  
    messages: {
      fullname: {
        required: 'Preencha o seu nome',
        maxLength: 'Tamanho máximo de 40 caracteres'
      },
      email: {
        required: 'Preencha o seu e-mail',
        maxLength: 'Tamanho máximo de 50 caracteres'
      },
      cpf: {
        required: 'Preencha o seu C.P.F.',
        maxLength: 'Tamanho máximo de 11 caracteres'
      },
      adress: {
        required: 'Preencha o seu endereço',
        maxLength: 'Tamanho máximo de 200 caracteres'
      },
      city: {
        required: 'Preencha o nome da sua cidade',
        maxLength: 'Tamanho máximo de 28 caracteres'
      },
      state: 'Escolha o seu Estado',
      radio: 'Selecione uma opção',
      resume: {
        required: 'Preencha o resumo do seu currículo',
        maxLength: 'Tamanho máximo de 1000 caracteres'
      },
      position: {
        required: 'Preencha o último cargo que você ocupou',
        maxLength: 'Tamanho máximo de 40 caracteres'
      },
      description: {
        required: 'Preencha a descrição do seu último cargo',
        maxLength: 'Tamanho máximo de 500 caracteres'
      },
      date: 'Preencha uma data',
    }
  });
}
/*
document.getElementsByTagName('button')[0].addEventListener('click', function (evt) {
  evt.preventDefault();
}); */

document.getElementById('date').DatePickerX.init({
  format:'dd/mm/yyyy',
  mondayFirst: false,
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
});

// new window.JustValidate('.js-form');
/*
new JustValidate('.js-form', {

  rules: {
    fullname: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    adress: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    resume: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    }
  },

  messages: {
    fullname: 'Preencha o seu nome',
    email: 'Preencha o seu e-mail',
    cpf: 'Preencha o seu C.P.F.',
    adress: 'Preencha o seu endereço',
    city: 'Preencha o nome da sua cidade',
    state: 'Escolha o seu Estado',
    radio: 'Selecione uma opção',
    resume: 'Preencha o resumo do seu currículo',
    position: 'Preencha o último cargo que você ocupou',
    description: 'Preencha a descrição do seu último cargo',
  }
});

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
