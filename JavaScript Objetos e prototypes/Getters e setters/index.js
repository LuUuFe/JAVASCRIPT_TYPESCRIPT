// defineProperty -> Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let valorPrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // valor
        // writable: true, // pode alterar
        configurable: true, // configurável
        get: function () {
            return valorPrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor incorreto');
            }
            valorPrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camisa', 20, 3);
// console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque);

const p2 = criaProduto('Camisa');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);