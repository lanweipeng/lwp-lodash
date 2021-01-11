const eq = require("./eq");

var object = { 'a': 1 };
var other = { 'a': 1 };
test('eq1', () => {
  expect(eq(object,object)).toBe(true);
});
test('eq2', () => {
  expect(eq(object,other)).toBe(false);
});
test('eq3', () => {
  expect(eq('a','a')).toBe(true);
});
test('eq4', () => {
  expect(eq('a',Object('a'))).toBe(false);
});
test('eq5', () => {
  expect(eq(NaN,NaN)).toBe(true);
});
test('eq6', () => {
  expect(eq(0,-0)).toBe(true);
});