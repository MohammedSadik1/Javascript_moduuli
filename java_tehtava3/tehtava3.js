let numero = prompt(  "Anna Numero");
let numeroint = parseInt(numero)
let numero2 = prompt(  "Anna Numero");
let numeroint2 = parseInt(numero2)
let numero3 = prompt(  "Anna Numero");
let numeroint3 = parseInt(numero3)

let sum = numeroint + numeroint2 + numeroint3
let product = numeroint * numeroint2 * numeroint3
let average = sum / 3

document.querySelector('#p1').innerHTML = sum;
document.querySelector('#p2').innerHTML = product;
document.querySelector('#p3').innerHTML = average;
