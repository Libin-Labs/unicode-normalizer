import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('composes canonical characters', () => {
  assert.equal(api.normalizeUnicode('e\u0301'), 'é');
});
test('decomposes with NFD', () => {
  assert.equal(api.normalizeUnicode('é', 'NFD'), 'e\u0301');
});
test('uses compatibility composition', () => {
  assert.equal(api.normalizeUnicode('①', 'NFKC'), '1');
});
test('uses compatibility decomposition', () => {
  assert.equal(api.normalizeUnicode('①', 'NFKD'), '1');
});
test('leaves ASCII unchanged', () => {
  assert.equal(api.normalizeUnicode('plain'), 'plain');
});
test('rejects unsupported form', () => {
  assert.throws(() => api.normalizeUnicode('x', 'bad'), RangeError);
});
