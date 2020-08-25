//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorNumero = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < numbers[i+1]) {
    menorNumero = numbers[i];
  }
}

console.log(menorNumero);

// A resposta veio correta, mas tem alguma coisa errada, preciso rever e compara com o gabarito

/* Gababrito
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array.

let smallestNumber = 1000; // Gambiarra

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber);
*/