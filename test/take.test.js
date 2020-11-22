const take=require('../take');
test('take1', () => {
  expect(take([1, 2, 3])).toStrictEqual([1]);
});
test('take2', () => {
  expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});
test('take3', () => {
  expect(take([1, 2, 3], 5)).toStrictEqual([1,2,3]);
});
test('take4', () => {
  expect(take([1, 2, 3],0)).toStrictEqual([]);
});