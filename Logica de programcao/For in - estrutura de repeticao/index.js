/* const frutas = ['Maça', 'Uva', 'Pera']; */

/* for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
} */

/* for (let fruta in frutas) {
    console.log(frutas[fruta]);
} */

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Felipe',
    idade: 17
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}