const fromPairs = require('../fromPairs');
test('fromPairs', () => {
  expect(fromPairs([['a', 1], ['b', 2]])).toStrictEqual({ 'a': 1, 'b': 2 });
});