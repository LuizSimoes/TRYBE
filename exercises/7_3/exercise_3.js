// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

// 4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);// mantem o array só retira o elemento, (i,1) remove 1 elemento de indice 1
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

console.log(myRemoveWithoutCopy([1, 2, 3, 4],3));

// 1-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 2-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3-Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
let arrayEntrada = [1, 2, 3, 4];
let retorno = myRemoveWithoutCopy(arrayEntrada, 3);
//assert.notdeepStrictEqual(myRemoveWithoutCopy(retorno, arrayEntrada));

console.log(`${arrayEntrada, retorno}`);


