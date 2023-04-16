const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);

/* mostraElementos(elementos);

function criarElementos(tag) {
    const tagCriada = document.createElement(tag);
    return tagCriada;
}

function mostraElementos (elementos) {
    const caixa = document.querySelector('.container');
    const principal = document.createElement('div');
    caixa.appendChild(principal);

    for (let i = 0; i < elementos.length; i++) {
        let tag = criarElementos(elementos[i]['tag']);
        tag.innerHTML = elementos[i]['texto'];
        principal.appendChild(tag);
    }
} */