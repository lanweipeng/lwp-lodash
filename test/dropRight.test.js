const { expect } = require('@jest/globals');
const dropRight = require('../dropRight');
dropRight([1, 2, 3]);
// => [1, 2]
 
dropRight([1, 2, 3], 2);
// => [1]
 
dropRight([1, 2, 3], 5);
// => []
 
dropRight([1, 2, 3], 0);
// => [1, 2, 3]

test('dropRight1', () => {
  expect(dropRight([1, 2, 3])).toStrictEqual([1, 2]);
});
test('dropRight2', () => {
  expect(dropRight([1, 2, 3], 2)).toStrictEqual([1]);
});
test('dropRight3', () => {
  expect(dropRight([1, 2, 3], 5)).toStrictEqual([]);
});
test('dropRight4', () => {
  expect(dropRight([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});
