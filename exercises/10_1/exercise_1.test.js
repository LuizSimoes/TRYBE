const exercise_1 = require('./exercise_1');// aqui nome do arquivo

describe('A função soma', () => {
  it('Deve ser do tipo function', () => {
    expect(typeof exercise_1).toBe('function');
  });

  it('Retorna sum(4, 5) é 9', () => {
    expect(exercise_1(4, 5)).toBe(9);
  });

  it('o retorno de sum(0, 0) é 0', () => {
    expect(exercise_1(0, 0)).toBe(0);
  });

  it('lança um erro quando os parametros são 4 e "5"(string 5)', () => {
    expect(() => {
      exercise_1(4, "5");
    }).toThrow();
  });

  it('a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      exercise_1(4, "5");
    }).toThrow('parameters must be numbers');
  });  

});


/*
// Sintaxe do test
      test('', () => {})

// Sintaxe describe
      describe(''), () => {
        it('', () => {
        });
        . bloco de its
        .
        .
        .
      }

*/
