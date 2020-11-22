const pullAt = require('../pullAt');
var array = ['a', 'b', 'c', 'd'];
var pulled = pullAt(array, [1, 3]);

test('pullAt1', () => {
 expect(array).toStrictEqual(['a', 'c']);
});

test('pullAt2', () => {
  expect(pulled).toStrictEqual(['b', 'd']);
});
