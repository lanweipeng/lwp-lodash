const drop = require('./drop');
console.log(drop([1, 2, 3]));
// => [2, 3]
console.log(drop([1, 2, 3], 2));
// => [3]
console.log(drop([1, 2, 3], 5));
// => []
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3];
