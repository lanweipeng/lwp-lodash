const union =require('../union');
test('union', () => {
  expect(union([2], [1, 2])).toStrictEqual([2, 1]);
});