// String, number, undefined, null, boolean, symbol
const nome = 'Luis'; // String
const nome1 = "Luis"; // String
const nome2 = `Luis`; // String
const num1 = 10; // Number
const num2 = 10.5; // Number
let nomeAluno; // undefined -> não aponta para nenhum local na memória
const sonbrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória
const aprovado = false; // Boolean -> true, false (valor lógico)

let a = 2;
const b = a;

console.log(a, b);

a = 3;
console.log(a, b)