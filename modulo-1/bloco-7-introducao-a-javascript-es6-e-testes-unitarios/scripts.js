// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
  const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
  console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo';
    console.log(elseScope)
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`)
}
testingScope();



let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
    return 0;
});
// Seu código aqui.
console.log(`Os numeros ${oddsAndEvens} se encontrar na ordem crescente`);
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉