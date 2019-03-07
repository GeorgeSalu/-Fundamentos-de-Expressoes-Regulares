const texto = 'O joao recebeu 120 milhoes apostando 6 9 21 23 45 46'

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{7}/g))