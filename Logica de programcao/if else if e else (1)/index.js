const num = 10

if (1 === 1) {
    console.log('Literal');
}

if (num >= 0 && num <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (num >= 6 && num <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (num >= 9 && num <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}