const pullAll=require('./pullAll');
const basePull = require('./_basePull');

var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log(basePull(array,['a','c']))