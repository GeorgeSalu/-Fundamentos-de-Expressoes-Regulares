const texto = 'AB [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // nao define um range


console.log(texto.match(/[A-z]/g))