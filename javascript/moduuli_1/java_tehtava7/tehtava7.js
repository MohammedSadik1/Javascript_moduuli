let vastaus = 0
const kysymys = parseFloat(prompt(`nopan heittomäärä?`))
for (let i = 0; i <= kysymys; i++) {
    const heitot = Math.floor(Math.random()*6)+1;
    console.log(heitot);
    vastaus += heitot;
}