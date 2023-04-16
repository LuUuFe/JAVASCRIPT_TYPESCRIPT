// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

// + - / *
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const contaDuplicada = conta * 2;
let contaTriplicada = conta * 3;
contaTriplicada = contaTriplicada + 5;

console.log(typeof(primeiroNumero + segundoNumero))