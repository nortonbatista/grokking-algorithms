const Alphabet = {
  'a': 0,
  'b': 1,
  'c': 2,
  'd': 3,
  'e': 4,
  'f': 5,
  'g': 6,
  'h': 7,
  'i': 8,
  'j': 9,
  'k': 10,
  'l': 11,
  'm': 12,
  'n': 13,
  'o': 14,
  'p': 15,
  'q': 16,
  'r': 17,
  's': 18,
  't': 19,
  'u': 20,
  'v': 21,
  'w': 22,
  'x': 23,
  'y': 24,
  'z': 25,
} as const

type Letters = keyof typeof Alphabet

type User = {
  name: string;
}

class ListItem {
  name: string
  next: ListItem | null = null

  constructor(parameters: User) {
    this.name = parameters.name
  }
}

export class UserList {
  head: ListItem | null = null
  tail: ListItem | null = null
  size: number = 0

  add(user: User) {
    const listItem = new ListItem(user)
    this.size += 1

    if (this.head === null) {
      this.head = listItem
      this.tail = listItem
    } else if (this.tail !== null) {
      this.tail.next = listItem
      this.tail = listItem
    }
  }

  find({ name }: User) {
    let user = this.head

    while (user !== null) {
      if (user.name.toLowerCase() === name.toLowerCase()) return user

      user = user.next
    }

    return null
  }
}

export class UserDatabase {
  users = Array.from({ length: 26 }, () => new UserList())

  add(user: User) {
    const firstCharacter = this.#getFirstCharacter(user.name)
    const alphabetIndex = this.#alphabetIndex(firstCharacter)

    this.users[alphabetIndex].add(user)
  }

  find(user: User) {
    const firstCharacter = this.#getFirstCharacter(user.name)
    const alphabetIndex = this.#alphabetIndex(firstCharacter)

    return this.users[alphabetIndex].find(user)
  }

  #getFirstCharacter = (string: string) => string.toLowerCase().charAt(0) as Letters

  #alphabetIndex = (char: Letters) => Alphabet[char]
}
