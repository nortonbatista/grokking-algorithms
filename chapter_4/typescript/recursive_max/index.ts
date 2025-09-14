const recursive_max = (list: number[], carry?: number) => {
  const newCarry = carry || list[0]

  if (list.length === 1) {
    if (list[0] > newCarry) return list[0]

    return newCarry
  }

  return recursive_max(list.slice(1), list[0] > newCarry ? list[0] : newCarry)
}
