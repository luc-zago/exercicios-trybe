//Função que recebe dois strings e os compara de modo a verificar se o segundo string é o final do primeiro string

let palavra = "trybe"
let fimPalavra = "be"


function verificaFimPalavra(palavra, fimPalavra) {
    transformaPalavraEmArray = palavra.split("")
    transformaFimPalavraEmArray = fimPalavra.split("")

    arrayFinalPalavra = [transformaPalavraEmArray[(palavra.length - 2)], transformaPalavraEmArray[(palavra.length - 1)]]
    arrayFinalFimPalavra = [transformaFimPalavraEmArray[(fimPalavra.length -2)], transformaFimPalavraEmArray[(fimPalavra.length -1)]]

    converteStringFinalPalavra = arrayFinalPalavra.toString();
    converteStringFinalFimPalavra = arrayFinalFimPalavra.toString();

    if (converteStringFinalPalavra === converteStringFinalFimPalavra) {
        resposta = ("true");
    }
    else
        resposta = ("false");
    return resposta
}