const exercise_2 = require('./exercise_2');
const myRemove = require('./exercise_2');

describe('A função  myRemove', () => {
  it('Deve ser do tipo function', () => {
    expect(typeof exercise_2).toBe('function');
  });

  it('a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado expect = [1, 2, 4];', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('o array passado por parâmetro não sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
  });

});