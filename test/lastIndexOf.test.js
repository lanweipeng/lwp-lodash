const lastIndexOf=require('../lastIndexOf');
test('lastIndexOf1', () => {
  expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
});
test('lastIndexOf2', () => {
  expect(lastIndexOf([1, 2, 1, 2], 2,2)).toBe(1);
})