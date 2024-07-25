
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should round down a\'s floating point fractional number', () => {
      expect(calculateNumber('SUM', 1.4, 2.0)).to.equal(3);
    });

    it('should round up b\'s floating point fractional number', () => {
      expect(calculateNumber('SUM', 1.0, 2.5)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should round down a\'s floating point fractional number', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 1.4)).to.equal(2);
    });

    it('should round up b\'s floating point fractional number', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 1.5)).to.equal(1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the quotient of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should round down a\'s floating point fractional number', () => {
      expect(calculateNumber('DIVIDE', 3.0, 1.4)).to.equal(3);
    });

    it('should round up b\'s floating point fractional number', () => {
      expect(calculateNumber('DIVIDE', 3.0, 1.5)).to.equal(1.5);
    });

    it('should return Error if rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
    });
  });
});
