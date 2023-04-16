import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = gera.geraNovoCpf();

})();