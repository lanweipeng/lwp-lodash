const last=require('../last');
test('name', () => {
  expect(last([1, 2, 3])).toBe(3);
});