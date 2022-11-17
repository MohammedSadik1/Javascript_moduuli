let numerot = [];


while (true) {
    num = parseInt(prompt("Anna numero: "));
    if (num === 0) break;
    numerot.push(num);
}
numerot.sort((a, b) => b - a);
console.log(numerot);