//Descobre se um objeto é um triângulo a partir dos valores de seus ângulos internos
let a = 50
let b = 30
let c = -100

if ((a + b + c) == 180) {
    console.log('true') }
    else if ((a + b + c) < 0) { 
    console.log('error') }
    else
        console.log('false')