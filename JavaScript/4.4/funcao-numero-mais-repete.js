//Função que analisa um array de números inteiros e retorna o número inteiro que mais se repete

let lista = [2, 3, 2, 5, 8, 2, 3, 5, 7, 9, 5, 8, 1, 5];

function numeroQueMaisAparece () {
    numeroIgual = 0;
    listaRepeticoes = []

    for (i = 0; i < lista.length; i = i+1) {
        numero = lista[i]
        for (let x in lista) {
            if (numero === lista[x]) {
                numeroIgual = numeroIgual +1
            }
        }
    listaRepeticoes.push(numeroIgual)
    numeroIgual = 0
    }

    let maiorNumero = 0

    for (y=0; y < listaRepeticoes.length; y = y+1) {
        if (maiorNumero < listaRepeticoes[y]) {
            maiorNumero = listaRepeticoes[y];
            indiceMaiorNumero = y
        }
    }
    return lista[indiceMaiorNumero]
}