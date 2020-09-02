//Dado um número 'n', imprime uma pirâmide

let n = 6
/* let lista = []
let listaEspaco = []
 */

if (n%2==0) {
    console.log('par')
}
else {
    console.log('impar')
// em relação aos números ímpares existe uma PA de +1
// para cada novo ímpar, o número de linhas aumenta em 1
// para cada novo ímpar, o número de espaços do topo da pirâmide aumenta em 1
// o número de espaços da do topo para a base da pirâmide diminui em 1
}


/*
for (y=0; y < (n-1); y = y+1) {
    listaEspaco.push(" ")
    listaEmStringEspaco = listaEspaco.join('');
}

for (i=0; i < n; i= i+1) {
    lista.push('*')
    let listaEmString = lista.join('');
    console.log(listaEmStringEspaco, listaEmString)
    listaEmStringEspaco = listaEmStringEspaco.substring(0, listaEmStringEspaco.length - 1);
} */