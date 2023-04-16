/* 
Operadores lógicos
&& -> false && true -> false
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || 'João' || c || d || e);