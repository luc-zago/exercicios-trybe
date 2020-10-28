//Conta a quantidade de itens ímpares de uma lista e os imprime. Caso não exista nenhum ímpar, imprime mensagem informando que não foi encontrado nenhum ímpar

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let quantidadeImpares = 0

for ( let contador =0; contador < numbers.length; contador=contador+1 ) {
    if (numbers[contador]%2!=0)
        quantidadeImpares = quantidadeImpares +1
    }

if (quantidadeImpares > 0) {
    console.log(quantidadeImpares)
}
else
    console.log('nenhum valor ímpar encontrado')