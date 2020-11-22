const drop = require('../drop');
test('drop1', () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});
test('drop2', () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
})
test('drop3', () => {
  expect(drop([1, 2, 3], 5)).toStrictEqual([]);
})
test('drop4', () => {
  expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
})