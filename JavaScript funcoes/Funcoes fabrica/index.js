// Factory function (função fábrica)
// Constructor function (função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,

        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura,

        peso,

        // Getter

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luis', 'Felipe', 1.78, 60);
p1.nomeCompleto = 'Luis Felipe Andrade Dias'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());