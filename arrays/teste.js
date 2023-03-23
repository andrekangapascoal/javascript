let num = [11, 23, 1, 5, 7, 9];

console.log(num);

for (let valor of num) {
  // O for OF é usado para chamar o valor de cada índice, chamando simplesmente a variável aribuida
  console.log(valor);
}
console.log("abaixoooooooooooooo");
for (let indice in num) {
  // O for IN é usado para o índice emm array, caso queiramos chamar os valores o índice deve estar dentro do array ex: num[indice], caso contrário só será eibido o índice ex: console.log(indice)
  console.log(indice);
}
console.log("abaixoooooooooooooo");
console.log(` O índidice do número 9 é: ${num.indexOf(9)}`);
