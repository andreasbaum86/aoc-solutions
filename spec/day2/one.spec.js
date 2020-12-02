const one = require('../../src/day2/one');

const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

describe('Part One', () => {
  it('should return 2 valid passwords', () => {
    expect(one.solve(input)).toEqual(2);
  });
});
