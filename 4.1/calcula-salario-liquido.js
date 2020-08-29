//Programa que calcula o salário líquido de uma pessoa

let salarioBruto = 6000

//Desconto do INSS
if (salarioBruto <= 1556.94) {
    salarioDescontadoINSS = salarioBruto - (salarioBruto * 0.08)
}
else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92 )) {
    salarioDescontadoINSS = salarioBruto - (salarioBruto * 0.09)
}
else if ((salarioBruto <= 5189.82) && (salarioBruto >= 2594.93 )) {
    salarioDescontadoINSS = salarioBruto - (salarioBruto * 0.11)
}
else if (salarioBruto > 5189.82) {
    salarioDescontadoINSS = salarioBruto - 570.88
}

//Desconto do Imposto de Renda
if (salarioDescontadoINSS <= 1903.98) {
    salarioLiquido = salarioDescontadoINSS
}
else if ((salarioDescontadoINSS >= 1903.99) && (salarioDescontadoINSS <= 2826.65 )) {
    salarioLiquido = salarioDescontadoINSS - ((salarioDescontadoINSS * 0.075) - 142.80)
}
else if ((salarioDescontadoINSS >= 2826.66) && (salarioDescontadoINSS <= 3751.05 )) {
    salarioLiquido = salarioDescontadoINSS - ((salarioDescontadoINSS * 0.15) - 354.80)
}
else if ((salarioDescontadoINSS >= 3751.06) && (salarioDescontadoINSS <= 4664.68 )) {
    salarioLiquido = salarioDescontadoINSS - ((salarioDescontadoINSS * 0.225) - 636.13)
}
else if (salarioDescontadoINSS > 4664.68) {
    salarioLiquido = salarioDescontadoINSS - ((salarioDescontadoINSS * 0.275) - 869.36)
}

console.log(salarioLiquido)