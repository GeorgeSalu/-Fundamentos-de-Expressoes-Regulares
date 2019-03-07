const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO'
const text2 = 'There is a big fog in NYC'

const regex = /fogo?/gi
console.log(text1.match(regex))
console.log(text2.match(regex))