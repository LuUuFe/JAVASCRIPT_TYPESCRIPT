import { async } from "regenerator-runtime";

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Olá, eu sou uma promise');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou');
}