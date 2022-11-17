const eka = parseInt(prompt("Enter a first year: "))
const toka = parseInt(prompt("Enter a second year: "))
let str = '';

let i;

for ( i = eka; i < toka; i += 1 ) {
    if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
        str += '<li>' + i + "</li>";
    }
}
document.body.innerHTML = str;