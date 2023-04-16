/* 
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__protto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + ' ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === p1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('Luis', 'F.'); // <= Pessoa = Função construtora
const p2 = new Pessoa('Maria', 'A.'); // <= Pessoa = Função construtora
const data = new Date(); // Date = Função construtora

console.dir(p1);
console.dir(data);