//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9];
let tamanho = numbers.length;
let mediaArtimetica = sum/tamanho;

if (mediaArtimetica >= 20) {
  console.log ("valor MAIOR que 20");
  console.log ("Valor calculado: " + mediaArtimetica);
} else {
  console.log ("valor MENOR que 20");
  console.log ("Valor calculado: " + mediaArtimetica);
}

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
*/

