import { FinanceTracker } from '.'

describe("new FinanceTracker()", () => {
  describe("initial state of the list", () => {
    describe("#head", () => {
      it("is null", () => {
        const financeTracker = new FinanceTracker()
        expect(financeTracker.head).toBe(null)
      })
    })

    describe("#tail", () => {
      it("is null", () => {
        const financeTracker = new FinanceTracker()
        expect(financeTracker.tail).toBe(null)
      })
    })

    describe("#size", () => {
      it("is 0", () => {
        const financeTracker = new FinanceTracker()
        expect(financeTracker.size).toBe(0)
      })
    })
  })

  describe("#add", () => {
    it("increase the value of list#size", () => {
      const financeTracker = new FinanceTracker()
      const expense = { expense: 10, description: 'Expense' }

      financeTracker.add(expense)
      financeTracker.add(expense)
      financeTracker.add(expense)

      expect(financeTracker.size).toBe(3)
    })

    describe("when the list is empty", () => {
      it("sets the list#head to the new entry", () => {
        const financeTracker = new FinanceTracker()
        const expense = { expense: 10, description: 'Expense' }

        financeTracker.add(expense)
        expect(financeTracker.head).not.toBe(null)
        expect(financeTracker.head?.expense).toBe(10)
        expect(financeTracker.head?.description).toBe('Expense')
      })

      it("sets the list#tail to the new entry", () => {
        const financeTracker = new FinanceTracker()
        const expense = { expense: 10, description: 'Expense' }

        financeTracker.add(expense)
        expect(financeTracker.tail).not.toBe(null)
        expect(financeTracker.tail?.expense).toBe(10)
        expect(financeTracker.tail?.description).toBe('Expense')
      })
    })

    describe("when the list is not empty", () => {
      it("does not change the list#head value", () => {
        const financeTracker = new FinanceTracker()
        const firstExpense = { expense: 10, description: 'First Expense' }
        const secondExpense = { expense: 40, description: 'Second Expense' }

        financeTracker.add(firstExpense)
        financeTracker.add(secondExpense)
        expect(financeTracker.head).not.toBe(null)
        expect(financeTracker.head?.expense).toBe(10)
        expect(financeTracker.head?.description).toBe('First Expense')
      })

      it("sets the list#tail to the new entry", () => {
        const financeTracker = new FinanceTracker()
        const firstExpense = { expense: 10, description: 'First Expense' }
        const secondExpense = { expense: 40, description: 'Second Expense' }

        financeTracker.add(firstExpense)
        financeTracker.add(secondExpense)
        expect(financeTracker.tail).not.toBe(null)
        expect(financeTracker.tail?.expense).toBe(40)
        expect(financeTracker.tail?.description).toBe('Second Expense')
      })

      it("sets the current list#tail#next to the new entry", () => {
        const financeTracker = new FinanceTracker()
        const firstExpense = { expense: 10, description: 'First Expense' }
        const secondExpense = { expense: 40, description: 'Second Expense' }

        financeTracker.add(firstExpense)
        const currentTail = financeTracker.tail

        financeTracker.add(secondExpense)
        expect(currentTail?.next?.expense).toBe(40)
        expect(currentTail?.next?.description).toBe('Second Expense')
      })
    })
  })

  describe("#summary", () => {
    describe("when the list is empty", () => {
      it("returns 0", () => {
        const financeTracker = new FinanceTracker()
        expect(financeTracker.summary()).toBe(0)
      })
    })

    describe("when the list is not empty", () => {
      it("returns the sum of all the expenses in the list", () => {
        const financeTracker = new FinanceTracker()
        const expense = { expense: 10, description: 'Expense' }

        financeTracker.add(expense)
        financeTracker.add(expense)
        financeTracker.add(expense)

        expect(financeTracker.summary()).toBe(30)
      })
    })
  })
})
