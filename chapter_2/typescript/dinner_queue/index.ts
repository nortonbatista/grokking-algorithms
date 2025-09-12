type Order = {
  description: string;
}

class ListItem {
  description: string
  next: ListItem | null = null

  constructor(parameters: Order) {
    this.description = parameters.description
  }
}

export class DinnerQueue {
  head: ListItem | null = null
  tail: ListItem | null = null
  size: number = 0

  shift(order: Order) {
    const listItem = new ListItem(order)
    this.size += 1

    if (this.head === null) {
      this.head = listItem
      this.tail = listItem
    } else if (this.tail !== null) {
      this.tail.next = listItem
      this.tail = listItem
    }
  }

  unshift() {
    if (this.head === null) return null

    const elementToRemove = this.head
    this.size -= 1

    if (this.head === this.tail) this.tail = null

    this.head = this.head.next

    return elementToRemove
  }
}
