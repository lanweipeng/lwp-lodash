const pull=require('./pull');

var array = ['a', 'b', 'c', 'a', 'b', 'c']
pull(array, 'a', 'c');

test('pull', () => {
  expect(array).toStrictEqual(['b', 'b']);
});