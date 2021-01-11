const camelCase = require("./camelCase");


test('should ', () => {
    expect(camelCase(['fdf','FDDD'])).toStrictEqual('fdfFddd');
});