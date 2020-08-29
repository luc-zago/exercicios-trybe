//Soma os itens da lista 'numbers'

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0

for ( let contador =0; contador < numbers.length; contador=contador+1 ) { soma = soma + numbers[contador]
    }

let media_aritmetica = soma / numbers.length

console.log(media_aritmetica)