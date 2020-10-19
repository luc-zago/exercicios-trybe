//Converte uma nota de 0 à 100 para A e F

let nota = 0.2

if (nota > 100) {
    console.log('erro')
}
else if (nota >= 90) {
    console.log('A')
}
else if (nota >=80) {
    console.log('B')
}
else if (nota >=70) {
    console.log('C')
}
else if (nota >= 60) {
    console.log('D')
}
else if (nota >= 50) {
    console.log('E')
}
else if (nota < 50 && nota >=0) {
    console.log('F')
}
else {
    console.log('erro')
}