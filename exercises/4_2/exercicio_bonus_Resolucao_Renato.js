
let numeros = [13, 5, 2, 1, 3, 8];

let count = 0;

console.log("Array desordenada:" + numeros);
for (let indiceExterno = 0; indiceExterno < numeros.length - 1; indiceExterno++) {
  console.log("Começo da iteração: [" + (indiceExterno + 1) + "]: " + numeros);
  for (let indiceInterno = 0; indiceInterno < numeros.length - 1; indiceInterno++) {
      if (numeros[indiceInterno] > numeros[indiceInterno + 1]) {
          let tmp = numeros[indiceInterno];
          numeros[indiceInterno] = numeros[indiceInterno + 1];
          numeros[indiceInterno + 1] = tmp;
      }
      count++;
      console.log("[" + indiceExterno + ":" +indiceInterno + "] " + numeros);  
  }
  console.log("Fim da iteração: [" + (indiceExterno + 1) + "]: " + numeros);
}

console.log("Array ordenada:" + numeros);
console.log("Quantidade de vezes que a lógica de swap foi executada" + count);