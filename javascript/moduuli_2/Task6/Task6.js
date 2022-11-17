let k = -1

function Noppa() {
  return Math.ceil(Math.random() * 6);
}

const list = document.getElementById('list');
let lista;
while (k !== 6){
  k = Noppa()
  lista = document.createElement('li');
  lista.innerHTML = k;
  list.append(lista);
}