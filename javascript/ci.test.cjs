const assert = require('node:assert/strict');
const { test } = require('node:test');
const lodash = require('lodash');
const { Parser } = require('hot-formula-parser');

test('locked lodash dependency loads and groups values', () => {
  assert.deepEqual(lodash.chunk([1, 2, 3], 2), [[1, 2], [3]]);
});

test('locked formula parser evaluates a basic expression', () => {
  assert.deepEqual(new Parser().parse('SUM(1, 2, 3)'), { error: null, result: 6 });
});
