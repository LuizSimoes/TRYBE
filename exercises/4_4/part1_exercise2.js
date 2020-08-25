// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.


let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};


for (let indice in info) {
  console.log(indice, info[indice]);
}

console.log("----------------------------------")

for (let indice in info) {
  console.log(indice + " : " + info[indice]); //concatenando só pra treinar
}