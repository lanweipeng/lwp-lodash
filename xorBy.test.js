const xorBy=require('./xorBy')

// console.log(xorBy([1.2,2.3],[1.3,3.4],Math.floor))
// _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// // => [1.2, 3.4]
 
// // The `_.property` iteratee shorthand.
// _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// // => [{ 'x': 2 }]
test('xorBy1', () => {
  expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([1.2, 3.4]);
});
test('xorBy2', () => {
  expect(xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toStrictEqual([{ 'x': 2 }]);
});