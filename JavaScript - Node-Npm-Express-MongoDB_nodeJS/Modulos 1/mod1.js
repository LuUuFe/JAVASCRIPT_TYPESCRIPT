class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// exports.Pessoa = Pessoa;

const nome = 'Luis';
const sobrenome = 'Felipe';

module.exports = {
    nome, sobrenome, Pessoa
};

exports.outraCoisa = 'Outra coisa';

// const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Qualquer coisa que quiser exportar!';