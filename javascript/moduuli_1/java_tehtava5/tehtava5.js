let luku = (prompt('Anna Luku'));
if ((0 === luku % 4) && (0 != luku % 100) || (0 == luku % 400)) {
  document.querySelector('#vuosi').innerHTML =  `${luku} on karkausvuosi`
} else {document.querySelector('#vuosi').innerHTML =  `${luku} ei ole karkausvuosi`}