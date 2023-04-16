/* function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luis', 'Felipe', 17);
const pessoa2 = criaPessoa('Junior', 'Silva', 14);
const pessoa3 = criaPessoa('Henrique', 'Oliveira', 21);
console.log(pessoa1.nome, pessoa2.nome) */

const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Felipe',
    idade: 17,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();