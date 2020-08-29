//faz uma comparação entre as variáveis 'a', 'b' e 'c' e retorna a maior delas
let a = 15
let b = 15
let c = 14

if (a > b && a > c) {
    console.log(a) }
    else if (a < b && b > c) {
        console.log(b) }
    else if (c > b && c > a) {
        console.log(c) }
    else
        console.log('Ao menos duas variáveis possuem o mesmo valor')