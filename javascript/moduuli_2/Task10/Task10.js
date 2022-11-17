
const henkilo = [
    {
        nimi: 'ellie',
        aanet: 0,
    },
    {
        nimi: 'frank',
        aanet: 0,
    },
    {
        nimi: 'pamela',
        aanet: 0,
    },
];
const aanet = prompt('Anna haluamasi äänestettävän nimi: ');
function voteForPerson(aanet) {
    for (let k = 0; k < henkilo.length; k++) {
        if (henkilo[k].nimi === aanet) {
            henkilo[k].aanet++;
        }
    }
}

function Results() {
    console.log(`Tulokset:`)
    for (let k = 0; k < henkilo.length; k++) {
        console.log(`${henkilo[k].nimi} on ${henkilo[k].aanet} ääniä`);
    }
}
voteForPerson(aanet);
Results();