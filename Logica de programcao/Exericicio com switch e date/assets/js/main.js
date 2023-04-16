/* const caixaTexto = document.querySelector('.caixa');
const dataHoje = new Date();
formatarData(dataHoje);

function formatarData(dataHoje) {
    const diaDaSemana = formatarDiaSemana(dataHoje.getDay());
    const dia = dataHoje.getDate();
    const mes = formatarMes(dataHoje.getMonth());
    const ano = dataHoje.getFullYear();
    const hora = dataHoje.getHours();
    const min = dataHoje.getMinutes();
    
    const data = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
    mostrarData(data);
}

function formatarMes(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes];
}

function formatarDiaSemana(diaDaSemana) {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira','Quinta-feira', 'Sexta-feira', 'Sabádo'];
    return diasDaSemana[diaDaSemana]
}

function mostrarData(dataHoje) {
    caixaTexto.innerHTML = '';
    caixaTexto.innerHTML = `${dataHoje}`;
} */

const caixaTexto = document.querySelector('.caixa');
const dataHoje = new Date();

caixaTexto.innerHTML = dataHoje.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});