/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(0, 'prop')
... (spread)

// Já vimos
Object.keys (retorna chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8, material: 'Porcelana' };

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}