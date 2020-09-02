
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
}

let info_patinhas = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}
/*
console.log('Bem-vinda, ' + info.personagem)

console.log(info)

for (let key in info) {
    console.log(key);
}

for (let value in info) {
    console.log(info[value]);
} */

for (let x in (info && info_patinhas)) {
    
    if (info[x] === info_patinhas[x]) {
        console.log('Ambos recorrentes')
    }
    
    else {
        console.log(info[x] + ' e ' + info_patinhas[x])
    }
}