const pullAllBy = require('./pullAllBy');

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
console.log(pullAllBy(array,[{ 'x': 1 }, { 'x': 3 }], 'x'))