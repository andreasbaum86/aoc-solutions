const two = require('../../src/day1/two');

const input = [1721, 979, 366, 299, 675, 1456];

describe('Part Two', () => {
  it('should return 241861950 from given input', () => {
    expect(two.solve(input)).toEqual(241861950);
  });
});
