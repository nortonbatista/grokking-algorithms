type Expense = {
  expense: number;
  description: string;
}

class ListItem {
  expense: number
  description: string
  next: ListItem | null = null

  constructor(parameters: Expense) {
    this.expense = parameters.expense
    this.description = parameters.description
  }
}

export class FinanceTracker {
  head: ListItem | null = null
  tail: ListItem | null = null
  size: number = 0

  add(expense: Expense) {
    const listItem = new ListItem(expense)
    this.size += 1

    if (this.head === null) {
      this.head = listItem
      this.tail = listItem
    } else if (this.tail !== null) {
      this.tail.next = listItem
      this.tail = listItem
    }
  }

  summary() {
    let total = 0
    let node = this.head

    while (node) {
      total += node.expense
      node = node.next
    }

    return total
  }
}
