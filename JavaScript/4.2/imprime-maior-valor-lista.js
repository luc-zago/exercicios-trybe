//Identifica e imprime o maior valor de uma lista

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maiorItem = numbers[0]

for ( let contador =0; contador < numbers.length; contador=contador+1 ) {
    if (numbers[contador]>maiorItem)
        maiorItem = numbers[contador]
    }

console.log(maiorItem)