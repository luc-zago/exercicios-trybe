//Dado um número 'n', imprime uma pirâmide. O número n deve ser ímpar

let n = 5
let lista = []
let listaEspaco = []

if (n%2==0) {
    console.log('error')
    }

else {
    numeroTopoEspacoVazioPiramide = (n / 2) - 0.5
    for (i=0; i < numeroTopoEspacoVazioPiramide; i = i+1) {
        listaEspaco.push(" ")
        listaEmStringEspaco = listaEspaco.join('');
    }

    lista.push('*')
    let listaEmString = lista.join('');
    console.log(listaEmStringEspaco, listaEmString)

    for (y=2; y < n; y= y+2) {
        lista.push('*')
        lista.push('*')
        listaEmString = lista.join('');
        listaEmStringEspaco = listaEmStringEspaco.substring(0, listaEmStringEspaco.length - 1);
        console.log(listaEmStringEspaco, listaEmString);
    }
}