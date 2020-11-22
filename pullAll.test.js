const pullAll=require('./pullAll');
const basePull = require('./_basePull');

var array = ['a', 'b', 'c', 'a', 'b', 'c']
pullAll(array,['a','c']);
test('pullAll', () => {
  expect(array).toStrictEqual(['b','b']);
});