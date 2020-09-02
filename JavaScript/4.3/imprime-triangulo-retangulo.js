//Dado um número 'n', imprime um triângulo retângulo

let n = 5
let lista = []

for (i=0; i < n; i= i+1) {
    lista.push('*')
    let listaEmString = lista.join('');
    console.log(listaEmString)
}