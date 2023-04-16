/* const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let tempo = new Date("1970-01-01 00:00:00");

function iniciarTimer(tempo) {
    tempo = tempo.setSeconds(tempo.getSeconds() + 1)
    return tempo
}

iniciar.addEventListener('click', function (event) {
    const timer = setInterval(function () {
        iniciarTimer(tempo);
        relogio.innerHTML = tempo.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }, 1000);
    pausar.addEventListener('click', function (event) {
        setTimeout(function () {
            clearInterval(timer);
        });
    })
    zerar.addEventListener('click', function (event) {
        setTimeout(function () {
            clearInterval(timer);
        });
        tempo = new Date("1970-01-01 00:00:00")
        relogio.innerHTML = tempo.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    })
}) */

function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}

relogio();