const countBy = require("./countBy");

 test('countBy ', () => {
   expect(countBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({ '4': 1, '6': 2 });  
 });
test('countBy ', () => {
    expect(countBy(['one', 'two', 'three'], 'length')).toStrictEqual({ '3': 2, '5': 1 });  
  });