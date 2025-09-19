export const quickSort = (array: number[]) => {
  if (array.length < 2) return array

  const pivotPoint = Math.floor(Math.random() * array.length)
  const pivot = array[pivotPoint]

  let smaller: number[] = []
  let greather: number[] = []

  for (let i = 0; i < array.length; i++) {
    if (i === pivotPoint) continue

    const element = array[i]

    if (element < pivot) {
      smaller.push(element)
    } else {
      greather.push(element)
    }
  }

  return [...quickSort(smaller), pivot, ...quickSort(greather)]
}
