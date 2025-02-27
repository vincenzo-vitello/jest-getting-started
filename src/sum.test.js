/* eslint-disable no-undef */
import sum from './sum';

// eslint-disable-next-line no-undef
test('makes 1 + 1', () => {
  expect(sum(1, 1)).toBe(2);
});

test('makes 2 + 2', () => {
  expect(sum(2, 2)).toBe(4);
});

test('makes -1 + 1', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('makes 0 + 0', () => {
  expect(sum(0, 0)).toBe(0);
});
