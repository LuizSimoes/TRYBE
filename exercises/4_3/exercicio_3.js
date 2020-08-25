/*Agora inverta o lado do triângulo. Por exemplo:
 n = 5
    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.*/

// Criar uma váriavel para colocar o valor recebido
// Criar array vazio para inserir espaços
// verificar se variável é > 1
// Inserir no array espaços em posições conforme a quantidade de asterisco equivalente a variável
// Substiur os espaços em Branco pela diferença do contador menos o valor recebido
// imprimir linhas com a quantidade de asterisco equivalente a variável assim que os * for incrementado


// **** Gabarito ****
let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  for (columnIndex = 0; columnIndex <= n; columnIndex++) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
};