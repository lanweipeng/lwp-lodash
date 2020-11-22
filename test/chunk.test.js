const chunk =require('../chunk');
test('chunk1', () => {
  expect(chunk(['a', 'b', 'c', 'd'],2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});
test('chunk2', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
})