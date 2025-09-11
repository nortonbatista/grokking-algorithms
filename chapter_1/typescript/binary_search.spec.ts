import { binarySearch } from './binary_search'

describe("#binarySearch", () => {
  describe("when the array is empty", () => {
    it("returns -1", () => {
      expect(binarySearch([], 0)).toBe(-1)
    })
  })

  describe("when the searched item is not in the array", () => {
    it("returns -1", () => {
      expect(binarySearch([1, 2, 3], 4)).toBe(-1)
      expect(binarySearch([1, 3], 2)).toBe(-1)
      expect(binarySearch([2, 3], 1)).toBe(-1)
    })
  })

  describe("when the serched item is in the array", () => {
    it("returns the index where the item is", () => {
      expect(binarySearch([1, 2, 3], 1)).toBe(0)
      expect(binarySearch([1, 2, 3], 2)).toBe(1)
      expect(binarySearch([1, 2, 3], 3)).toBe(2)
    })
  })
})
