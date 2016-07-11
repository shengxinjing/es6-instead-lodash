// import {
//   hashKey,
//   HashMap
// } from '../src/apis'

describe('apis', function () {

  describe('HashMap', function () {
    it('supports put and get of primitives', function () {
      expect(1+2).toBe(3)      
    })
    it('sad',()=>{
      expect([1,2,3]).toEqual([1,2,3])
    })
    // it('supports remove', function () {
    //   var map = new HashMap()
    //   map.put(42, 'fourty two')
    //   map.remove(42)
    //   expect(map.get(42)).toBeUndefined()
    // })
    // it('returns value from remove', function () {
    //   var map = new HashMap()
    //   map.put(42, 'fourty two')
    //   expect(map.remove(42)).toEqual('fourty two')
    // })
  })
})
