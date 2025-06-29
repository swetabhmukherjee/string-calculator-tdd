const { add } = require('../src/stringCalculator')

test('returns 0 for empty string', () => {
  expect(add('')).toBe(0);
});

test('returns number for single number', () => {
  expect(add('4')).toBe(4);
});

test('returns sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('returns sum of multiple numbers', () => {
  expect(add('1,2,3,4')).toBe(10);
});
