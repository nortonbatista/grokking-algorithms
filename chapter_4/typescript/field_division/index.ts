const fieldDivision = (h: number, w: number) => {
  if (w === 0) return h

  return fieldDivision(w, h % w)
}
