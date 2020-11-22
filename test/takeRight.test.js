const takeRight=require('../takeRight');
test('takeRight1', () => {
  expect(takeRight([1, 2, 3])).toStrictEqual([3]);
});
test('takeRight2', () => {
  expect(takeRight([1, 2, 3], 2)).toStrictEqual([2, 3]);
});
test('takeRight3', () => {
  expect(takeRight([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
});
test('takeRight4', () => {
  expect(takeRight([1, 2, 3], 0)).toStrictEqual([]);
});