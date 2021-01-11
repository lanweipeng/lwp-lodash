const overEvery = require("./overEvery");

var func = overEvery([Boolean,isFinite]);
test('should 1', () => {
    expect(func('1')).toStrictEqual(true);
    expect(func(null)).toStrictEqual(false);
    expect(func(NaN)).toStrictEqual(false);
});