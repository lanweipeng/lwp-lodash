const intersection = require('../intersection');
test('intersection', () => {
  expect(intersection([2, 1], [2, 3])).toStrictEqual([2]);
});