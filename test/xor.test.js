const xor =require('../xor');
const res=xor([2, 1], [2, 3]);
console.log(res)
// => [1, 3]

test('xor', () => {
  expect(xor([2, 1], [2, 3])).toStrictEqual([1,3]);
});