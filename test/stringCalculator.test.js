const { add } = require('../src/stringCalculator')

test('returns 0 for empty string', () => {
  expect(add('')).toBe(0);
});

test('returns number for single number', () => {
  expect(add('4')).toBe(4);
});
