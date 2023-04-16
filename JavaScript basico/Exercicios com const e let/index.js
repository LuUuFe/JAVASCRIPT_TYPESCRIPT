const nome = 'Luis Felipe';
const sobrenome = 'Andrade Dias';
const idade = 17;
const peso = 58;
const alturaEmM = 1.78;
let imc
let anoNascimento;
imc = peso / (alturaEmM* alturaEmM);
anoNascimento = 2023 - idade;
// templeate strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);