const dropRight = require('./dropRight');
dropRight([1, 2, 3]);
// => [1, 2]
 
dropRight([1, 2, 3], 2);
// => [1]
 
dropRight([1, 2, 3], 5);
// => []
 
dropRight([1, 2, 3], 0);
// => [1, 2, 3]