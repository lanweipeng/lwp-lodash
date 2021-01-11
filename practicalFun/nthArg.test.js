const nthArg=require('./nthArg');
var func1=nthArg(1)
test('should 1', () => {
    expect(func1('a', 'b', 'c', 'd')).toStrictEqual('b');
});
var func2 = nthArg(-2);
test('should 2', () => {
    expect(func2('a', 'b', 'c', 'd')).toStrictEqual('c');
});
