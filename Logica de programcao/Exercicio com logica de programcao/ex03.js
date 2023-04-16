function Fizzbuzz(num) {
    if (typeof(num) !== 'number') return num
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz' 
    if (num % 3 === 0) 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}

let i = 0
while (i <= 100) {
    console.log(i, Fizzbuzz(i))
    i++;
}
console.log(Fizzbuzz('oi'))