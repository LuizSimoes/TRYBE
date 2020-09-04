// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item
// caso ele exista no array

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

module.exports = myRemoveWithoutCopy;
