const overArgs=require('./overArgs');
const {square,doubled,slice}=require('../utils')
function fn(){
    return slice.call(arguments)
}
test('overArgs1', () => {
    var func=overArgs(function(x,y){
        return [x,y]
    },[square,doubled]);
    expect(func(9,3)).toStrictEqual([81,6])
});
test('overArgs2', () => {
    const over=overArgs(fn,doubled,square);
    console.log(over)
    expect(over(5,10)).toStrictEqual([10,100])
});