//Crie seu event listener abaixo:

window.onload = function () {
  
  const caixaTexto = document.querySelector('.caixa-texto');
  const caixaUm = document.querySelector('.caixa1');
  const caixaDois = document.querySelector('.caixa2');
    

  function trocaTextoA () {
    caixaUm.innerText = caixaTexto.value;
  }

  function trocaTextoB () {
    caixaDois.innerText = caixaTexto.value;
  }

  document.getElementsByClassName('caixa-texto')[0].addEventListener('keyup', trocaTextoA);

  if (document.getElementsByClassName('caixa-texto')[0].value === "") {
  } else {
    document.querySelector(':not(.caixa-texto)').addEventListener('click', trocaTextoB)
  }
}
