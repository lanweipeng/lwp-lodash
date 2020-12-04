const once=require('../function/once');
test('once', () => {
    let count=0,
        onceFn=once(function(){return ++count});
    onceFn();
    expect(onceFn()).toStrictEqual(1);
    expect(count).toStrictEqual(1);
});