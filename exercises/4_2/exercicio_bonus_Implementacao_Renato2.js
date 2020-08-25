let numbers = [13, 5, 2, 1, 3, 8];
console.log(numbers);

let count = 0;
let indice = 0;

for (let ultimo = numbers.length - 1; ultimo > 0; ultimo--) {
  console.log("Verificando da posição 0 até " + ultimo);
  indice += 1;
  for (let i = 0; i < ultimo; i++) {
      console.log("antes do swap [" + i + "] " + numbers);  
      if (numbers[i] > numbers[i + 1]) {
          let tmp = numbers[i];
          numbers[i] = numbers[i + 1];
          numbers[i + 1] = tmp;
      }
      count++;
      console.log("depois do swap [" + i + "] " + numbers);  
  }
  console.log("Fim da iteração: [" + (indice + 1) + "]: " + numbers);
}

console.log(numbers);
console.log(count);