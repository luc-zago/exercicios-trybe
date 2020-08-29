//Calcula a média aritmética dos itens de uma lista e devolve uma mensagem informando se a média é maior que 20 ou não

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0

for ( let contador =0; contador < numbers.length; contador=contador+1 ) { soma = soma + numbers[contador]
    }

let media_aritmetica = soma / numbers.length

if (media_aritmetica > 20) {
    console.log('valor maior que 20')
}
else
    console.log('valor menor ou igual a 20')