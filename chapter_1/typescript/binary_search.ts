export const binarySearch = <T>(array: T[], search: T) => {
  if (array.length === 0) return -1

  let max = array.length - 1
  let low = 0

  while (low <= max) {
    const middle = Math.floor((max + low) / 2)
    const guess = array[middle]

    if (guess === search) return middle

    if (guess > search) max = middle - 1

    if (guess < search) low = middle + 1
  }

  return -1
}
