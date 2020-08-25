function factorialFor(number) {
  let x = number;
  while (x > 1) {
    number *= x-1;
    x--;
  }
  return number;
}

function factorialWhile(number) {
  for (let i = number; i > 1; i -= 1) {
    number *= i-1;
  }
  return number;
}

console.log(`com FOR: ${factorialFor(5)}`);
console.log(`com WHILE: ${factorialWhile(5)}`);
