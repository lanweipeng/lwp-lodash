const flatten = require('./flatten');
console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten([[], [[]], [[], [[[]]]]]));
