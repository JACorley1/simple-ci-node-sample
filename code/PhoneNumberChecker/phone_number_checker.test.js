const checker = require('./phone_number_checker');

test('number too small', () => {
  expect(checker(1)).toBe(false);
});

test('seven digit number', () => {
  expect(checker(1234567)).toBe(true);
});