//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// **Atente que, sobre o custo do produto, incide um imposto de 20%.
// **Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custoProduto = 10;
let valorVenda = 20;
let totalVendido = 1000; //Aqui você pode alterar a quantidade vendida;


if (custoProduto <= 0 || valorVenda <= 0) {
  console.log("Erro: Valores recebido menor que zero")
} else { 
  let lucro = ((valorVenda - custoProduto) * 0.8 * totalVendido);
  console.log(lucro);
}
