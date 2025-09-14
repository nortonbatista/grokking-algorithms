const fibonacci = (n: number) => {
  if (n <= 2) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}
