import { DinnerQueue } from '.'

describe("new DinnerQueue()", () => {
  describe("initial state of the list", () => {
    describe("#head", () => {
      it("is null", () => {
        const dinnerQueue = new DinnerQueue()
        expect(dinnerQueue.head).toBe(null)
      })
    })

    describe("#tail", () => {
      it("is null", () => {
        const dinnerQueue = new DinnerQueue()
        expect(dinnerQueue.tail).toBe(null)
      })
    })

    describe("#size", () => {
      it("is 0", () => {
        const dinnerQueue = new DinnerQueue()
        expect(dinnerQueue.size).toBe(0)
      })
    })
  })

  describe("#shift", () => {
    it("increase the value of list#size", () => {
      const dinnerQueue = new DinnerQueue()
      const order = { description: 'Order' }

      dinnerQueue.shift(order)
      dinnerQueue.shift(order)
      dinnerQueue.shift(order)

      expect(dinnerQueue.size).toBe(3)
    })

    describe("when the list is empty", () => {
      it("sets the list#head to the new entry", () => {
        const dinnerQueue = new DinnerQueue()
        const order = { description: 'Order' }

        dinnerQueue.shift(order)
        expect(dinnerQueue.head).not.toBe(null)
        expect(dinnerQueue.head?.description).toBe('Order')
      })

      it("sets the list#tail to the new entry", () => {
        const dinnerQueue = new DinnerQueue()
        const order = { description: 'Order' }

        dinnerQueue.shift(order)
        expect(dinnerQueue.tail).not.toBe(null)
        expect(dinnerQueue.tail?.description).toBe('Order')
      })
    })

    describe("when the list is not empty", () => {
      it("does not change the list#head value", () => {
        const dinnerQueue = new DinnerQueue()
        const firstOrder = { description: 'First Order' }
        const secondOrder = { description: 'Second Order' }

        dinnerQueue.shift(firstOrder)
        dinnerQueue.shift(secondOrder)
        expect(dinnerQueue.head).not.toBe(null)
        expect(dinnerQueue.head?.description).toBe('First Order')
      })

      it("sets the list#tail to the new entry", () => {
        const dinnerQueue = new DinnerQueue()
        const firstOrder = { description: 'First Order' }
        const secondOrder = { description: 'Second Order' }

        dinnerQueue.shift(firstOrder)
        dinnerQueue.shift(secondOrder)
        expect(dinnerQueue.tail).not.toBe(null)
        expect(dinnerQueue.tail?.description).toBe('Second Order')
      })

      it("sets the current list#tail#next to the new entry", () => {
        const dinnerQueue = new DinnerQueue()
        const firstOrder = { description: 'First Order' }
        const secondOrder = { description: 'Second Order' }

        dinnerQueue.shift(firstOrder)
        const currentTail = dinnerQueue.tail

        dinnerQueue.shift(secondOrder)
        expect(currentTail?.next?.description).toBe('Second Order')
      })
    })
  })

  describe("#unshift", () => {
    describe("when the list is empty", () => {
      it("returns null", () => {
        const dinnerQueue = new DinnerQueue()
        expect(dinnerQueue.unshift()).toBe(null)
      })
    })

    describe("when the list is not empty", () => {
      it("decrease the value of list#size", () => {
        const dinnerQueue = new DinnerQueue()
        const order = { description: 'Order' }

        dinnerQueue.shift(order)
        dinnerQueue.shift(order)
        dinnerQueue.unshift()

        expect(dinnerQueue.size).toBe(1)
      })

      it("returns the current list#head", () => {
        const dinnerQueue = new DinnerQueue()
        const order = { description: 'Order' }

        dinnerQueue.shift(order)
        dinnerQueue.shift(order)

        const headItem = dinnerQueue.head
        const unshiftedItem = dinnerQueue.unshift()

        expect(unshiftedItem).toEqual(headItem)
      })

      describe("when there is only one element in the list", () => {
        it("sets the list#head to null", () => {
          const dinnerQueue = new DinnerQueue()
          const order = { description: 'Order' }

          dinnerQueue.shift(order)
          dinnerQueue.unshift()

          expect(dinnerQueue.head).toBe(null)
        })

        it("sets the list#tail to null", () => {
          const dinnerQueue = new DinnerQueue()
          const order = { description: 'Order' }

          dinnerQueue.shift(order)
          dinnerQueue.unshift()

          expect(dinnerQueue.tail).toBe(null)
        })
      })

      describe("when there is more than one element on the list", () => {
        it("sets the current list#head to the list#head#next", () => {
          const dinnerQueue = new DinnerQueue()
          const firstOrder = { description: 'First Order' }
          const secondOrder = { description: 'Second Order' }

          dinnerQueue.shift(firstOrder)
          dinnerQueue.shift(secondOrder)
          const nextElement = dinnerQueue.head?.next

          dinnerQueue.unshift()
          expect(dinnerQueue.head).toBe(nextElement)
        })
      })
    })
  })
})
