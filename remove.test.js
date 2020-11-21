const remove = require('./remove');
var array = [1, 2, 3, 4];
var evens = remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]