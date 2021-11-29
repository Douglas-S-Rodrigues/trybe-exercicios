let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDosValores = 0;
let resultadoFinal = 0;
let media = 0;
for (let i = 0; i < numbers.length; i += 1) {
  somaDosValores = somaDosValores + numbers[i];
}
resultadoFinal = somaDosValores;
media = resultadoFinal / numbers.length;

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

console.log(`A media da soma dos valores do array é: ${media}`);
