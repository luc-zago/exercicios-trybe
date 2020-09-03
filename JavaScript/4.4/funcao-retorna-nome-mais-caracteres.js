
//Função que analisa um array de nomes e retorna o nome com o maior número de caracteres

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

let maiorNome = nomes[0]

function verificaNomeListaMaisCaracteres (nomes) {
    for (i=0; i < nomes.length; i= i+1) {
        if (maiorNome.length < nomes[i].length) {
            maiorNome = nomes[i]
        }
    }
    return maiorNome;
}
