//Recebe duas variáveis (custo de um produto e valor de venda) e calcula o lucro na venda de 1000 produtos

let custoProduto = 10
let valorVenda = 20

let custoTotal = custoProduto + (custoProduto*0.2)
let lucro = valorVenda - custoTotal

if ((custoProduto<0) || (valorVenda<0)) {
    console.log('erro')
}

console.log(lucro*1000)