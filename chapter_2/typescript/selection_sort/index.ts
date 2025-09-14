const selectionSort = (list: number[]) => {
  const newList: number[] = []

  while (list.length > 0) {
    let greatestIndex = 0

    for (let i = 1; i < list.length; i++) {
      if (list[i] > list[greatestIndex]) greatestIndex = i
    }

    newList.push(list.splice(greatestIndex, 1)[0])
  }

  return newList
}
