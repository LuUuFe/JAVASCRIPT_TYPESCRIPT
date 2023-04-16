function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esparaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg != 'string') {
                reject('CAIR NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esparaAi('Promise 1', rand(1, 5)),
//     esparaAi('Promise 2', rand(1, 5)),
//     esparaAi('Promise 3', rand(1, 5)),
//     esparaAi(1000, rand(1, 5)),
// ];

function baixaPagina() {
    const EmCache = true;

    if(EmCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esparaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch( e => console.log('ERROR', e));



// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });