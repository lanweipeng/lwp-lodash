const fill = require('./fill');
var array = [1, 2, 3];
 
fill(array, 'a');
// console.log(array);
// => ['a', 'a', 'a']
 
fill(Array(3), 2);
// => [2, 2, 2]
 
fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
