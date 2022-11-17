let numerot = [];
let numero;
while (true) {
  numero = parseInt(prompt("Enter number: "));
  if (numerot.includes(numero)) {
    alert("Number already given");
    break;
  }
  numerot.push(numero);
}
const nr = numerot.sort( (a, b) => a - b).map(luvut => `<li>${luvut}</li>`)
console.log(numerot);
const Tulos = document.querySelector('ul');
Tulos.innerHTML = nr.join(" ");