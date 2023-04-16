// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // // Atributos ou métodos Privados
    const ID = 123456;

    const metodoInterno = function () {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome, 'Sou um método');
    }
}

const p1 = new Pessoa('Luis', 'Felipe');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();