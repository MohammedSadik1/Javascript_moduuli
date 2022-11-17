const valinta = confirm('Should I calculate the square root?');

if (valinta == true) {
  document.querySelector('#kala').innerHTML = Math.sqrt(
      parseFloat(prompt('gib number')));
} else {
  document.querySelector(
      '#kala').innerHTML = 'The square root is not calculated.';
}


