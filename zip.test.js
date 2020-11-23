const zip = require("./zip");


test('zip', () => {
  // expect(zip(['a', 'b'], [1, 2], [true, false])).toBe();
  expect(zip(['a', 'b'], [1, 2], [true, false]).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});
// _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]