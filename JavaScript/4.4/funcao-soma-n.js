//Função que recebe um número 'n' inteiro e soma todos os números anteriores de 1 até 'n'

let n = 9

function somaN (n) {
    soma = 0
    for (i=0; i <= n; i = i+1) {
        soma = soma + i
    }
    return soma
}