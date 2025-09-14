const recursive_length = (list: unknown[]) => {
  if (list[0] === undefined) return 0

  return 1 + recursive_length(list.slice(1))
}
