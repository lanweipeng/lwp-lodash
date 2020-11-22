const isEqual=require('./isEqual')
var object = { 'a': 1 };
var other = { 'a': 1 };
 
// isEqual(object, other);
test('name', () => {
  expect(isEqual(object, other)).toBe(true);
});