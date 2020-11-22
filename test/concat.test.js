const concat =require('../concat');
var array = [1];
var other = concat(array, 2, [3], [[4]]);
test('concat:other', () => {
  expect(other).toStrictEqual([1, 2, 3, [4]]);
});
test('concat:array', () => {
  expect(array).toStrictEqual([1]);
});