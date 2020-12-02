const two = require('../../src/day2/two');

const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

describe('Part Two', () => {
  it('should return one valid password', () => {
    expect(two.solve(input)).toEqual(1);
  });
});
