const one = require('../../src/day1/one');

const input = [1721, 979, 366, 299, 675, 1456];

describe('Part One', () => {
  it('should return 514579 from given input', () => {
    expect(one.solve(input)).toEqual(514579);
  });
});
