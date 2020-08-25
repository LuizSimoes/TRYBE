const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*************************************************************************************/
// Crie uma função para adicionar o turno da manhã na lesson2. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, 
// a chave que deverá ser adicionada e o valor dela.
const addTurnMorning = (obj, key, value) =>  obj.key = value;
console.table(lesson2)
addTurnMorning(lesson2,'turno', 'manhã');
console.table(lesson2);

/*************************************************************************************/
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = obj => {
  for (let prop in obj) {
    console.log(prop);
  }
}
listKeys(lesson1);

//Com Object.key
const listKeys2 = (obj) =>  Object.keys(obj);
console.log(listKeys2(lesson1));

/*************************************************************************************/
// Crie uma função para mostrar o tamanho de um objeto.
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

/*************************************************************************************/
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = obj => Object.values(obj);
console.log(listValues(lesson1));

/*************************************************************************************/
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
// Ao executar o comando console.log(allLessons)
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
