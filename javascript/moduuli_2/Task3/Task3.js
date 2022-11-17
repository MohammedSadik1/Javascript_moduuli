koirat = []


let k = 0;

for (k === 0; k < 6; k++) {
  koirat[k] = prompt("Anna Koirien nimet: ")
}
koirat.sort((a,b) => a > b ? -1: 1)
document.querySelector('#k1').textContent = "Antamasi koirien nimet: "+ koirat;