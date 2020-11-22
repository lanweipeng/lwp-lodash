const isArrayLikeObject = require("../isArrayLikeObject")
const noop=function(){}


test('isArrayLikeObject1', () => {
  expect(isArrayLikeObject([1, 2, 3])).toBe(true)
})
 
// isArrayLikeObject(document.body.children)
// test('isArrayLikeObject2', () => {
//   expect(isArrayLikeObject([1, 2, 3])).toBe(true)
// })

test('isArrayLikeObject3', () => {
  expect(isArrayLikeObject('abc')).toBe(false)
})
 

test('isArrayLikeObject4', () => {
  expect(isArrayLikeObject(noop)).toBe(false)
})