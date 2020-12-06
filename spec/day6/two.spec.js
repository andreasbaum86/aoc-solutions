const one = require('../../src/day6/two');

describe('Part Two', () => {
  it('should return 6 answered questions', () => {
    const input = ['abc', '', 'a', 'b', 'c', '', 'ab', 'ac', '', 'a', 'a', 'a', 'a', '', 'b', ''];
    expect(one.solve(input)).toEqual(6);
  });
});
