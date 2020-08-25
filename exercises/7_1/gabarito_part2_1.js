const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i += 1) {
      result *= i
  }

  return result
}

console.log(factorial(5))

// Maneira reursiva para fazer a mesma coisa que a função de cima.

const factorialMinimizada = number => number > 1 ? number * factorialMinimizada(number - 1) : 1

console.log(factorialMinimizada(5))