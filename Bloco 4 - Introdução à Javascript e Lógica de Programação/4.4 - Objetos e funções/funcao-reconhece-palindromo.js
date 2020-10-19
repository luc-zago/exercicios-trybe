
//Função que reconhece 'palíndromo'

let entrada = "arara"

function verificaPalindrome (entrada) {
    listaInvertida = []
    transformaStringEmArray = entrada.split("")
    for (tamanhoArray = (transformaStringEmArray.length -1); tamanhoArray >= 0; tamanhoArray = tamanhoArray-1) {
        listaInvertida.push(transformaStringEmArray[tamanhoArray])
    }
    stringListaInverta = listaInvertida.toString();
    novoStringEntrada = transformaStringEmArray.toString();

    if (novoStringEntrada === stringListaInverta) {
        saida="true";
    }
    else
        saida="false";
    
    return saida;
}
