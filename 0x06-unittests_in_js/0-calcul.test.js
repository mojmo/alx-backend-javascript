// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers when both are integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round up both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round up a\'s floating point fractional number and b to the nearest integer', () => {
    assert.strictEqual(calculateNumber(0.4, 0.5), 1);
  });

  it('should return the sum of rounded negative and positive numbers', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
  });

  it('should round up a and b\'s floating point fractional numbers with negative values', () => {
    assert.strictEqual(calculateNumber(-1.5, 1.5), 1);
  });

  it('should round down a and b\'s floating point fractional numbers with both negative values', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
  });

  it('should round down a and b\'s floating point fractional numbers close to integer', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
