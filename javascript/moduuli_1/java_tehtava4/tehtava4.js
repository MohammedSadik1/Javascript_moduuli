const nimi = prompt(  "Anna nimesi");

const luokat = Math.random()
if (luokat <= 0.25) {
  document.querySelector('#missa').innerHTML =  `${nimi} onneksi olkoon olet Slytherin`
}
else if (luokat >= 0.26 && luokat <0.50) {
  document.querySelector('#missa').innerHTML =  `${nimi} onneksi olkoon olet Daredevil`
}
else if (luokat >=0.51 && luokat <=0.75) {
document.querySelector('#missa').innerHTML =  `${nimi} onneksi olkoon olet Hufflepuff`
}
else if (luokat >=0.76 && luokat <=1) {
  document.querySelector('#missa').innerHTML =  `${nimi} onneksi olkoon olet Ravenclaw`
}