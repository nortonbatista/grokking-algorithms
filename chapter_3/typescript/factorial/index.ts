const factorial = (n: number) => {
  if (n < 0) throw new Error("Number should be greather or equal to zero");

  if (n === 0) return 1

  return n * factorial(n - 1)
}

console.log(factorial(170))
