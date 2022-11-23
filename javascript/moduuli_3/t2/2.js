const nimi = [
  'Eka tuote',
  'Toka tuote',
  'Kolmas tuote',
];
let li;
nimi.map((nimi) => {
  li = document.createElement('li');
  document.querySelector('#target').innerHTML += `<li>${nimi}</li>`;
});