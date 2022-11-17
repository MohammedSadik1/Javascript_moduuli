let noppa = parseInt(prompt("Monta noppaa haluat heittää?"));
function diceRoll() {
  return Math.floor(Math.random()* noppa) + 1 ;
}
let k;
let list = [];
while (true) {
    k = diceRoll();
    list.push(k);
    if (k === noppa){
        break;
    }
}

const result = document.querySelector('ul');
result.innerHTML = list.map(item =>`<li>${item}</li>`).join(" ");