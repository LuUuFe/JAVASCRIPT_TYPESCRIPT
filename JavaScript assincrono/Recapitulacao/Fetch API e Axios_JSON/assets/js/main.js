fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaResultado(json));

// axios('pessoas.json')
//   .then(resposta => carregaResultado(resposta.data));

function carregaResultado(json) {
  const table = document.createElement('table');
  for (let pessoa of json) {
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);
    table.appendChild(tr);
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}