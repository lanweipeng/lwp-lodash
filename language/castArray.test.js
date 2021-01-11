const castArray=require('./castArray');
test('should ', () => {
    expect(castArray(1)).toStrictEqual([1]);
});
test('should ', () => {
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }]);
});
test('should ', () => {
    expect(castArray('abc')).toStrictEqual(['abc']);
});

test('should ', () => {
    expect(castArray()).toStrictEqual([]);
});
var array = [1, 2, 3];
test('should ', () => {
    expect(castArray(array)).toStrictEqual(array);
});
test('should ', () => {
    expect(castArray(undefined)).toStrictEqual([undefined]);
});
test('should ', () => {
    expect(castArray(null)).toStrictEqual([null]);
});
