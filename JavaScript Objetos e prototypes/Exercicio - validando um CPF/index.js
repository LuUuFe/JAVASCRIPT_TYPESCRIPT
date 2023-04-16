// 705.484.450-52 070.987.720-03
/* 
7x   0x  5x  4x  8x  4x  4x  5x  0x
10   9    8   7   6   5   4   3  2
70   0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.

7x   0x  5x  4x  8x  4x  4x  5x  0x  5x
11   10   9   8   7   6   5   4  3   2
70   0   40  28  48  20  16  15  0   10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.
*/

/* let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0)); */

/* function validaCpf(cpf) {
    let indice = 10
    const cpfLimpo = limpaCpf(cpf);
    const cpfArray = retornaArrayCpf(cpfLimpo);
    cpfArray.splice(-2, 2);
    while (cpfArray.length < 11) {
        let cpfMultiplicados = multiplicaCpf(cpfArray, indice);
        let totalCpf = retornaTotalCpf(cpfMultiplicados);
        let primeiroDigito = pegaPrimeiroDigito(totalCpf);
        cpfArray.push(primeiroDigito);
        indice++;
    }
    const cpfVerificado = verificaCpf(cpfArray, cpf)
    return cpfVerificado;
}

const limpaCpf = cpf => cpf.replace(/\D+/g, '');
const retornaArrayCpf = cpfLimpo => Array.from(cpfLimpo);
const multiplicaCpf = (cpfArray, indice) => cpfArray.map(valor => {
    valor = valor *= indice
    indice--;
    return valor;
});
const retornaTotalCpf = cpfMultiplicados => cpfMultiplicados.reduce((acumulador, valor) => acumulador += valor);
const pegaPrimeiroDigito = totalCpf => {
    if ((11 - (totalCpf % 11)) > 9) return 0;
    return 11 - (totalCpf % 11);
};
const verificaCpf = (cpfArray, cpf) => {
    return cpfArray.join('') === cpf.replace(/\D+/g, '');
}

console.log(validaCpf('705.484.450-52')); */

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.valida('705.484.450-52'));

if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}