const numerokokoelma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function even(kokoelma){
  const tasaluku = []
  for (k = 0; k < kokoelma.length; k++){
    if (kokoelma[k] % 2 === 0){
      tasaluku.push(kokoelma[k])
    }
  }
  return tasaluku;
}
console.log(numerokokoelma)
console.log(even(numerokokoelma))