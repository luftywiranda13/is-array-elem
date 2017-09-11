'use strict';

const isArrayElem = require('./');

test('output', () => {
  expect(isArrayElem(['foo', 'bar'], 'bar')).toBe(true);
  expect(isArrayElem(['foo', 'bar'], 'baz')).toBe(false);
  expect(isArrayElem(['foo', 'bar'], 'foo')).toBe(true);
});
