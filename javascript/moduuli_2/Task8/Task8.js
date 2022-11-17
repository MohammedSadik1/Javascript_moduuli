let lista = ['Jonny', 'Deedee', 'Joey', 'Marky'];
function concat(kokoelma){
  let mod = " "
  let k;
  for (k = 0; k < kokoelma.length; k++){
    mod = mod + kokoelma[k];
  }
  return mod;
}
document.querySelector('#nimet').textContent = concat(lista);