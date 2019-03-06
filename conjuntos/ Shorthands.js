const texto = `1,2,3,4,5,6,a.b c!d?e -
f_g`

console.log(texto.match(/\d/g)) // numeros
console.log(texto.match(/\D/g)) // nao numeros

console.log(texto.match(/\w/g)) // caracteres