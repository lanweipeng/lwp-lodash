const pullAt = require('./pullAt');
var array = ['a', 'b', 'c', 'd'];
var pulled = pullAt(array, [1, 3]);
 
console.log(array);
// => ['a', 'c']
 
console.log(pulled);