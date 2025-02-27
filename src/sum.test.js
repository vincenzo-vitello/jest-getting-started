/* eslint-disable no-undef */
import sum from './sum';

test('makes 1 + 1', () => {
  expect(sum(1, 1)).toBe(2);
});

test('makes 2 + 2', () => {
  expect(sum(2, 2)).toBeTruthy();
});

test('makes -1 + 1', () => {
  expect(sum(-1, 1)).toBeFalsy();
});

test('makes 0 + 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('makes 0 + 0', () => {
  expect(sum(0, 0)).not.toBeNull();
});

test('makes 1 + 2', () => {
  expect(sum(1, 2)).toBeGreaterThan(2);
  expect(sum(1, 2)).toBeLessThan(5);
});
