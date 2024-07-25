
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should round down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    });

    it('should round up b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should round down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 1.4), 2);
    });

    it('should round up b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 1.5), 1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the quotient of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should round down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 1.4), 3);
    });

    it('should round up b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 1.5), 1.5);
    });

    it('should return Error if rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });
});
