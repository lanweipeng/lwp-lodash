const flattenDepth = require('./flattenDepth');
// console.log(flattenDepth([1, [2, [3, [4]], 5]]))
var array = [1, [2, [3, [4]], 5]];
 
// _.flattenDepth(array, 1);
// // => [1, 2, [3, [4]], 5]
 
// _.flattenDepth(array, 2);
// // => [1, 2, 3, [4], 5]
// test('flattenDepth1', () => {
//   expect(flattenDepth(array, 1)).toStrictEqual([1, 2, [3, [4]], 5]);
// });
// test('flattenDepth2', () => {
//   expect(flattenDepth(array, 2)).toStrictEqual([1, 2, 3, [4], 5);
// });