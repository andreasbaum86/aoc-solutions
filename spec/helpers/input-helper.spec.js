const inputHelper = require('../../src/helpers/input-helper');

const INPUT_PATH = `${__dirname}/inputs`;

describe('inputHelper', () => {
  describe('getInputArrayAsStrings', () => {
    it('should return the correct array from input', () => {
      const path = `${INPUT_PATH}/strings.txt`;
      const expectedArray = ['abc', 'def', 'ghj'];

      expect(inputHelper.getInputArrayAsStrings(path)).toEqual(expectedArray);
    });
  });

  describe('getInputArrayAsNumbers', () => {
    it('should return the correct array from input', () => {
      const path = `${INPUT_PATH}/numbers.txt`;
      const expectedArray = [123, 456, 789];

      expect(inputHelper.getInputArrayAsNumbers(path)).toEqual(expectedArray);
    });
  });
});
