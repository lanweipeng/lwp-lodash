const head = require('../head');
test('head1', () => {
  expect(head([1, 2, 3])).toBe(1);
});
test('head2', () => {
  expect(head([])).toBe(undefined);
});