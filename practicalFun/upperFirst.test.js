const upperFirst=require('./upperFirst')
test('should 1', () => {
    expect(upperFirst('adfs')).toStrictEqual('Adfs');
});
test('should 2', () => {
    expect(upperFirst('aGFFDSD')).toStrictEqual('AGFFDSD');
});