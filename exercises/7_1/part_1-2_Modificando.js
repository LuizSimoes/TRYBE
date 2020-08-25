// Código original exercício 1
// Corrija o código para que 'i' declarado na instrução if seja uma variável separada daquela declarada na 'i' primeira linha da função. Certifique-se de não usar a 'var' palavra - chave em nenhum lugar do código.
// function checkScope() {
//   'use strict';
//   var i = 'function scope';
//   if (true) {
//     i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

// Resposta:
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// Altere o código para que todas as variáveis ​​sejam declaradas usando let ou const. Use let quando quiser que a variável mude e const quando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com const para estar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas.
// function printManyTimes(str) {
//   "use strict";

//   // Only change code below this line

//   var sentence = str + " is cool!";
//   for (var i = 0; i < str.length; i+=2) {
//     console.log(sentence);
//   }

//   // Only change code above this line

// }
// printManyTimes("freeCodeCamp");

// Resposta:
function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = " is cool!";
  console.log(SENTENCE);
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

