import { Point, findOrangeSeller } from '.'

describe("#findOrangeSeller", () => {
  describe("AAAAAAAAAAAAAAAAA", () => {
    it("BBBBBBBBBBB", () => {
      const anuj = new Point({ is_orange_seller: false }, [])
      const peggy = new Point({ is_orange_seller: false }, [])
      const thom = new Point({ is_orange_seller: true }, [])
      const jonny = new Point({ is_orange_seller: false }, [])
      const bob = new Point({ is_orange_seller: false }, [anuj, peggy])
      const alice = new Point({ is_orange_seller: false }, [peggy])
      const claire = new Point({ is_orange_seller: false }, [thom, jonny])
      const me = new Point({ is_orange_seller: false }, [alice, bob, claire])

      expect(findOrangeSeller(me)).toEqual(thom)
    })

    it("CCCCCCCCCCCC", () => {
      const claire = new Point({ is_orange_seller: false }, [])
      const me = new Point({ is_orange_seller: false }, [claire])
      claire.siblings.push(me)

      expect(findOrangeSeller(me)).toEqual(null)
    })
  })
})
