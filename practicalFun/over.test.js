const over=require('./over');
var func=over([Math.max, Math.min])
test('should 1', () => {
    expect(func(1,2,3,4)).toStrictEqual([4,1]);
});