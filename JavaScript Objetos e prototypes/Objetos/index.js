// Factory functions / Constructor function / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa('Luis', 'Felipe');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Felipe');

console.log(p1);
console.log(p2);







/* function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luis', 'Felipe');
console.log(p1.nomeCompleto); */

/* const pessoa1 = new Object();
pessoa1.nome = 'Luis';
pessoa1.sobrenome = 'Felipe';
pessoa1.idade = 17;
pessoa1.falaNome = function() {
    return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
} */

/* const pessoa = {
    nome: 'Luis',
    sobrenome: 'Felipe'
};
 */

// const chave = 'sobrenome'
// console.log(pessoa['sobrenome']);
// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);