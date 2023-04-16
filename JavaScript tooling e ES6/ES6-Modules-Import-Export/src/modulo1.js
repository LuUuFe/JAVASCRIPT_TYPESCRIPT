const nome = 'Luis';
const sobrenome = 'Felipe';
const idade = 30;

function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };