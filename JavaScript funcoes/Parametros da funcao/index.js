// "argurments" argumentos que sustenta todos os argumentos enviados

/* function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Luis', 'Felipe', 17]); */

const conta = (...args) => {
    console.log(args);
};

conta('+', 1, 20, 30, 40, 50);