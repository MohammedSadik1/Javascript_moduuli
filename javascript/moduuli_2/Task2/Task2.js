osallistujat = parseInt(prompt("Anna osallistujat:"))
let x = 0;
let numero;
numero = [];

for (x === 0; x < osallistujat; x++) {
  numero[x] = prompt("Anna osallistujien nimet: ")
}
numero.sort((a,b) => a > b ? 1: -1)
document.querySelector('#k1').textContent = "Olet valinnut "+ osallistujat +  " osallistujaa. Heidän nimet ovat: " + numero;

