class Box {
  content: Array<string | Box> = []
}

const findKey = (box: Box) => {
  for (let index = 0; index < box.content.length; index++) {
    const element = box.content[index];

    if (element === 'key') return true

    if (element instanceof Box) {
      if (findKey(element)) return true
    }
  }

  return false
}

const boxA = new Box()
const boxB = new Box()
const boxC = new Box()
const boxD = new Box()

boxB.content.push(boxD)
boxC.content.push('key')

boxA.content.push(boxB)
boxA.content.push(boxC)

if (findKey(boxA)) {
  console.log('Key found')
} else {
  console.error('Key not found')
}
