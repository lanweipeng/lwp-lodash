const tail=require('../tail');
test('tail', () => {
  expect(tail([1, 2, 3])).toStrictEqual([2,3]);
});