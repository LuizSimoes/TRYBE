// Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7]usar várias atribuições de elemento.
// Você não deve substituir a constpalavra-chave.
// sdeve ser uma variável constante (usando const).
// Você não deve alterar a declaração da matriz original.
// sdeve ser igual a [2, 5, 7].

// const s = [5, 7, 2];
// function editInPlace() {
//   'use strict';
//   // Only change code below this line

//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// editInPlace();

// Resposta:
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

s[0] = 2;
s[1] =5;
s[2] = 7;

  // Only change code above this line
}
editInPlace();


// Neste desafio, você vai usar Object.freezepara evitar que as constantes matemáticas mudem. Você precisa congelar o MATH_CONSTANTSobjeto para que ninguém possa alterar o valor PI, adicionar ou excluir propriedades.
// Você não deve substituir a constpalavra-chave.
// MATH_CONSTANTSdeve ser uma variável constante (usando const).
// Você não deve alterar o original MATH_CONSTANTS.
// PIdeve ser igual 3.14.

// function freezeObj() {
//   'use strict';
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Only change code below this line


//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// Resposta:
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
