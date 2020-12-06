const one = require('../../src/day6/one');

describe('Part One', () => {
  it('should return 11 answered questions', () => {
    const input = ['abc', '', 'a', 'b', 'c', '', 'ab', 'ac', '', 'a', 'a', 'a', 'a', '', 'b', ''];
    expect(one.solve(input)).toEqual(11);
  });
});
