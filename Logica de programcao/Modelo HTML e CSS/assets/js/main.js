const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}


/* function calculaImc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        peso = peso.value;
        altura = altura.value;
        const imc = peso / (altura * altura)
        
        if (isNaN(peso) || peso === '') {
            resultado.innerHTML = `<p class="erro">Peso inválido</p>`;
        } else if (isNaN(altura) || altura === '') {
            resultado.innerHTML = `<p class="erro">Altura inválida</p>`;
        } else if (imc < 18.5) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.4) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
        } else if (imc > 40) {
            resultado.innerHTML = `<p class="certo">O seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`;
        }
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
calculaImc(); */