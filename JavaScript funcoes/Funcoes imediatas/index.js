// IIFE -> Immediately invoked function expression
/* function qualquerCoisa() {
    console.log(1100302232);
}

qualquerCoisa(); */

(function (idade, peso, altura) {

    const sobrenome = 'Felipe';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luis'))
    }
    falaNome();
    console.log(idade, peso, altura);
    
})(17, 60, 1.78);