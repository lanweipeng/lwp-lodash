const fill = require('../fill');
var array = [1, 2, 3];
fill(array, 'a');
test('fill1', () => {
  expect(array).toStrictEqual(['a', 'a', 'a']);
});
fill(Array(3), 2);
test('fill2', () => {
  expect(fill(Array(3), 2)).toStrictEqual([2, 2, 2]);
});
test('fill3', () => {
  expect(fill([4, 6, 8, 10], '*', 1, 3)).toStrictEqual([4, '*', '*', 10]);
});