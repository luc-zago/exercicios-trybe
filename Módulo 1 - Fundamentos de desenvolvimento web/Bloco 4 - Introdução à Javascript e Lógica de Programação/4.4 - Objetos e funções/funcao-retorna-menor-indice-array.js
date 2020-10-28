
//Função que recebe um array de números inteiros e retorna o índice do menor número

let lista =[12, 15, 27, -2, 5, 10000, 8, 9, 7]

function verificaMenorNumeroRetornaIndice (lista) {
    let menorNumero = 0

    for (i=0; i < lista.length; i = i+1) {
        if (menorNumero > lista[i]) {
            menorNumero = lista[i];
            indiceMenorNumero = i
        }
    }
    return indiceMenorNumero
}