//Descobre se um objeto é um triângulo a partir dos valores de seus ângulos internos
let a = 50
let b = 30
<<<<<<< HEAD
let c = 102

/*switch (a, b, c) {
    case (b < 0):
        console.log('error')
        break;
    case b < 0:
        console.log('error')
        break;
    case c < 0:
        console.log('error') 
    default: */

if (a < 0) {
    console.log('error') }
    else if (b < 0) {
        console.log('error') }
    else if (c < 0) {
        console.log('error') }
    else if ((a + b + c) == 180) {
        console.log('true') }
=======
let c = -100

if ((a + b + c) == 180) {
    console.log('true') }
    else if ((a + b + c) < 0) { 
    console.log('error') }
>>>>>>> bb52f83e4626af8ea33455603b27257848dd6ca2
    else
        console.log('false')