export const binarySearch = (array: number[], search: number, low = 0, max = array.length - 1) => {
  if (array.length === 0) return -1

  if (low <= max) {
    const middle = Math.floor((max + low) / 2)
    const guess = array[middle]

    if (guess === search) return middle

    if (guess > search) return binarySearch(array, search, low, middle - 1)

    if (guess < search) return binarySearch(array, search, middle + 1, max)
  }

  return -1
}
