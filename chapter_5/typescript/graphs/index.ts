export class Point<T> {
  value: T
  siblings: Point<T>[] = []

  constructor(value: T, siblings: Point<T>[] = []) {
    this.value = value
    this.siblings = siblings
  }
}

const anuj = new Point({ is_orange_seller: false }, [])
const peggy = new Point({ is_orange_seller: false }, [])
const thom = new Point({ is_orange_seller: false }, [])
const jonny = new Point({ is_orange_seller: false }, [])
const bob = new Point({ is_orange_seller: false }, [anuj, peggy])
const alice = new Point({ is_orange_seller: false }, [peggy])
const claire = new Point({ is_orange_seller: false }, [thom, jonny])
const me = new Point({ is_orange_seller: false }, [alice, bob, claire])

export const findOrangeSeller = (point: Point<{ is_orange_seller: boolean }>) => {
  const list = [...point.siblings]
  const notOrangeSellers = [] as typeof list

  while (list.length > 0) {
    const a = list.shift() as Point<{ is_orange_seller: boolean }>

    if (notOrangeSellers.find((b) => b === a)) continue

    if (a.value.is_orange_seller) return a

    list.push(...a.siblings)
    notOrangeSellers.push(a)
  }

  return null
}

findOrangeSeller(me)
