const remove = require('../remove');
var array = [1, 2, 3, 4];
var evens = remove(array, function(n) {
  return n % 2 == 0;
});
 
 test('remove1', () => {
   expect(array).toStrictEqual([1,3]);
 });

test('remove2', () => {
  expect(evens).toStrictEqual([2,4]);
});