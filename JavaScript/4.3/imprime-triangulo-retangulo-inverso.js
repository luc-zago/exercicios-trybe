//Dado um número 'n', imprime um quadrado

let n = 5
let lista = []
let listaEspaco = []

for (y=0; y < (n-1); y = y+1) {
    listaEspaco.push(" ")
    listaEmStringEspaco = listaEspaco.join('');
}

for (i=0; i < n; i= i+1) {
    lista.push('*')
    let listaEmString = lista.join('');
    console.log(listaEmStringEspaco, listaEmString)
    listaEmStringEspaco = listaEmStringEspaco.substring(0, listaEmStringEspaco.length - 1);
}