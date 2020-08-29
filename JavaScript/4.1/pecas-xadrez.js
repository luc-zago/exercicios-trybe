//Recebe a peça do xadrez e retorna os seus movimentos
let nomeDaPeca = 'Cavalo'

nomeDaPecaMinusculo = nomeDaPeca.toLowerCase();

switch(nomeDaPecaMinusculo) {
    case 'cavalo':
        console.log('L')
        break;

    case 'dama':
        console.log('Horizontal, vertical e diagonais')
        break;

    case 'rainha':
        console.log('Horizontal, vertical e diagonais')
        break;

    case 'rei':
        console.log('Horizontal, vertical e diagonais')
        break;

    case 'torre':
        console.log('Horizontal e vertical')
        break;

    case 'bispo':
        console.log('Diagonais')
        break;

    case 'peao':
        console.log('Vertical e diagonais (apenas quando vai comer outra peça)')
        break;

    case 'peão':
        console.log('Vertical e diagonais (apenas quando vai comer outra peça)')
        break;
        
    default:
        console.log('error')
}