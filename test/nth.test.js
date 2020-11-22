const nth=require('../nth');

var array = ['a', 'b', 'c', 'd'];
 test('nth1', () => {
   expect(nth(array, 1)).toBe('b');
 });
test('nth', () => {
  expect(nth(array, -2)).toBe( 'c');
});