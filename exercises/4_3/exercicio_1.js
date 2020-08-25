// Criar uma várivel para colocar o valor
// verificar se variável é > 1
// criar um array com * em posições conform a quantidade de asterisco equivalente a variável
// imprimir linhas com a quantidade de asterisco equivalente a variável

let n = 5;
let linhas = [];

for (let i = 0; i < n; i += 1) {
  linhas.push('*');
};

for (let i = 0; i < n; i += 1) {
  console.log(linhas.toString());
};

// **** Gabarito ****
let m = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < m; lineIndex++) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < m; lineIndex++) {
  console.log(inputLine);
};
