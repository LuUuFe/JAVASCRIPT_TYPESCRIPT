function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esparaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject(new Error);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esparaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esparaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {  
        console.log(resposta);
        return esparaAi(2222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esparaAi('Finalizando...', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erro', e);
    });

console.log('Isso aqui será exibido antes de qualquer promisse.')











// CallBack
// esparaAi('Frase 1', rand(1, 3), function() {
//     esparaAi('Frase 2', rand(1, 3), function() {
//         esparaAi('Frase 3', rand(1, 3));
//     });
// });