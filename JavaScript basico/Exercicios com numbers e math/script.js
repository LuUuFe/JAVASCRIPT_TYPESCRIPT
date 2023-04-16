const num = Number(prompt('Digite um número:'));
const numTitulo = document.getElementById('numero-titulo');
const divTexto = document.getElementById('texto');

numTitulo.innerHTML = num;
divTexto.innerHTML = ''
divTexto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;
divTexto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
divTexto.innerHTML += `<p>é NaN: ${Number.isNaN(num)}</p>`;
divTexto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
divTexto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
divTexto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;