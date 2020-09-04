const myRemoveWithoutCopy = require('./exercise_3');

describe('Verificar se a chamada: ', () => {
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it(' myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const arrayReceveid = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);    
  });

});


/*
// 1-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 2-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3-Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
let arrayEntrada = [1, 2, 3, 4];
let retorno = myRemoveWithoutCopy(arrayEntrada, 3);
//assert.notdeepStrictEqual(myRemoveWithoutCopy(retorno, arrayEntrada));

// 4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/