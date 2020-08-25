// Criar uma várivel para colocar o valor
// Criar array vazio para inserir *
// verificar se variável é > 1
// Inserir no array com * em posições conforme a quantidade de asterisco equivalente a variável
// imprimir linhas com a quantidade de asterisco equivalente a variável assim que os * for incrementado

let n = 5;
let linhas = [];

if (n > 1) {
  for ( let i = 0; i < n; i += 1 ) {
    linhas.push ('*');
    console.log (linhas.toString());
  }
}

// **** Gabarito ****
let size = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex <= size; lineIndex++) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};
