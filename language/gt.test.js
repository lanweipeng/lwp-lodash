const gt =require('./gt');
test('should 1', () => {
    expect(gt(3,1)).toStrictEqual(true);
});
test('should 2', () => {
    expect(gt(3,3)).toStrictEqual(false);
});
test('should 3', () => {
    expect(gt(1,3)).toStrictEqual(false);
});

test('should 4', () => {
    expect(gt('def', 'abc')).toStrictEqual(true);
});
test('should 5', () => {
    expect(gt('abc', 'def')).toStrictEqual(false);
});
test('should 6', () => {
    expect(gt('def', 'def')).toStrictEqual(false);
});