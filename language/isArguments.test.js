const isArguments = require("./isArguments");

// test('should ', () => {
//    function a(){
//        return arguments
//    }
//     expect(isArguments(a)).toStrictEqual(true);
// });
test('should ', () => {
    
    expect(isArguments(function (){
        return arguments
    }())).toStrictEqual(true);
});