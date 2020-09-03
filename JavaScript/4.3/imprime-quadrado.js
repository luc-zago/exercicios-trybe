//Dado um número 'n', imprime um quadrado

let n = 5
let lista = []

for (y=0; y < n; y= y+1) {
    lista.push('*')
}

let listaEmString = lista.join("");

for (i=0; i < n; i= i+1) {
    
    console.log(listaEmString)
}