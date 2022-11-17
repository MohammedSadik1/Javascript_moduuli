const numero = parseInt(prompt('Enter a number: '));
juu = true
var i;

if (numero > 1) {
  for (i = 2; i < numero; i++) {
      if (numero % i === 0) {
        juu = false;
        break;
      }
  }
}
else {
  juu = false
}
if (juu) {
  document.body.textContent = ${numero} 'is a prime number.';
}
else {
  document.body.textContent = ${numero} 'is not a prime number.';
}