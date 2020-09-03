
//Função que recebe um array de números inteiros e retorna o índice do maior número

let lista =[12, 15, 27, 2, 5, 10000, 8, 9, -7]


function verificaMaiorNumeroRetornaIndice () {
    let maiorNumero = 0

    for (i=0; i < lista.length; i = i+1) {
        if (maiorNumero < lista[i]) {
            maiorNumero = lista[i];
            indiceMaiorNumero = i
        }
    }
    return indiceMaiorNumero
}