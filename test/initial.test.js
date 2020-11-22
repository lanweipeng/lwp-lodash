const initial = require('../initial');
test('initial', () => {
  expect(initial([1, 2, 3])).toStrictEqual([1, 2]);
});