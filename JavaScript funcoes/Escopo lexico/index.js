const nome = 'Luis';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Felipe';
    falaNome();
}

usaFalaNome();