// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.
//   verificaPalindrome("arara");
//   Retorno esperado: true
//   verificaPalindrome("desenvolvimento");
//   Retorno esperado: false

function verificaPalindrome(palavra) {

  let palindromo = "";

  for (let index = palavra.length - 1; index >= 0; index--) {
    palindromo += palavra[index]
  }

  if (palavra === palindromo) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

verificaPalindrome ("arara");

/***** Gabarito
        function verificaPalindrome(palavra) {
          let arrayLetras = palavra.split("");
          let isPalindrome = true;
          for (let index in arrayLetras) {
            if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
              isPalindrome = false;
            }
          }
          return isPalindrome;
        }

        console.log(verificaPalindrome('arara')); //true
        console.log(verificaPalindrome('desenvolvimento')); //false

 */


