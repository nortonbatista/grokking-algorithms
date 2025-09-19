import { quickSort } from '.'

describe("#quickSort", () => {
  describe("when the array is empty", () => {
    it("returns an empty array", () => {
      expect(quickSort([])).toEqual([])
    })
  })

  describe("when the array has one element", () => {
    it("returns the same array", () => {
      expect(quickSort([2])).toEqual([2])
    })
  })

  describe("when the array has more than one element", () => {
    it("returns the array sorted", () => {
      expect(quickSort([3, 2, 1])).toEqual([1, 2, 3])
      expect(quickSort([2, 3, 1])).toEqual([1, 2, 3])
      expect(quickSort([1, 2, 3])).toEqual([1, 2, 3])
    })
  })
})
