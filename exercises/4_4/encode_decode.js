function encode(string) {
  // seu código aqui
  let result = string.replace(/a/g,1);
  result = result.replace(/e/g,2);
  result = result.replace(/i/g,3);
  result = result.replace(/o/g,4);
  result = result.replace(/u/g,5);
  return result;
}
function decode() {
console.log(encode("hi there!"));

function decode(string) {
  // seu código aqui
  let result = string.replace(/1/g,"a");
  result = result.replace(/2/g,"e");
  result = result.replace(/3/g,"i");
  result = result.replace(/4/g,"o");
  result = result.replace(/5/g,"u");
  return result;
}