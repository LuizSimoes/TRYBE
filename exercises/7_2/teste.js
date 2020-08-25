const anyObject = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const anyFunction = (obj, key, value) =>  obj[key] = value; // tem que ser com [] pq esta como variável

anyFunction(anyObject,'hobby', 'colecionismo');
console.table(anyObject);