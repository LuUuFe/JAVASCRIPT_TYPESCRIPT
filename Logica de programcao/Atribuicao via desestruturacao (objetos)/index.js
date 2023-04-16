const pessoa = {
    nome: 'Luis',
    sobrenome: 'Felipe',
    idade: 17,
    endereco: {
        rua: 'Romeu campos',
        numero: '42'
    }
};

// Atribuição via desestruturação
/* const {nome, sobrenome, idade, endereco: {rua: r = '12345', numero}} = pessoa; */

const {nome, ...resto} = pessoa;
console.log(nome, resto);